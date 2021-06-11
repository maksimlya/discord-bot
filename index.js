const Discord = require('discord.js');
require('dotenv').config();
const constants = require('./utils/constants');
const { htmlToImage, initResources } = require('./utils/htmlGenerator');
const { VoicePlayer } = require('./voice/player');

const database = require('./db/client');
const api = require('./remote/api');  // Communication with Raider.io / Blizzard API
let mythicScoresChannel;

const client = new Discord.Client();
const voiceAgent = new VoicePlayer(client);

const enableBot = true;
let commonSlang = [];
let commonQuotes = [];

const refreshMythicScores = async () => {
  
  const profiles = await database.getAllProfiles();
  for(let profile of profiles) {

    const { updatedProfile, messageReply } = await api.fetchRemoteData(profile);
    
    if(updatedProfile) {

      // Some profile updates can be silent (like covenant changes).
      if(messageReply) {
        mythicScoresChannel.send(messageReply);
        voiceAgent.voiceQuote(messageReply);
      }

      // Save updated to db...
      database.updateProfile(updatedProfile);
    }
  }
 }

client.on('voiceStateUpdate', (prevState, newState) => {
  
  let greeting = voiceAgent.prepareGreeting(prevState, newState);

  if(greeting) {
    setTimeout(() => {
      voiceAgent.voiceQuote(greeting);
    }, 1000);
  }
});

client.on('ready', () => {
    console.log('Bot is ready');

    initResources();
    updateSlangs();
    updateQuotes();
    api.fetchBlizzardTokenFromDb();

    mythicScoresChannel = client.channels.cache.find(channel => channel.name === 'mythic-scores');
    testChannel = client.channels.cache.find(channel => channel.name === 'test');
    const slackersRoom = client.channels.cache.find(channel => channel.name === constants.channelNames.casualSlackersDungeonGroup);
    const generalRoom = client.channels.cache.find(channel => channel.name === constants.channelNames.general);
    slackersRoom.join().then(connection => {
      voiceAgent.setVoiceTunnel(connection);
    })
         
  });

  if(enableBot) {
    client.login(process.env.BOT_TOKEN);
  }

  // Refresh RIO data every 4 mins.
  setInterval(() => {
    refreshMythicScores();
  }, 4 * 60 * 1000);

 
  client.on('message', (msg) => {

    // Bot ignores himself
    if(msg.author.username === constants.profileNames.botName) {
      return;
    }

    if(msg.channel.name === 'music-order') {
     return voiceAgent.handleMusicCommand(msg.content);
    }

    if(msg.channel.name === 'mythic-scores') {
      if(msg.content.toLocaleLowerCase().replace(/ /g, '') == 'shameboard') {
        return database.getAllProfiles().then(res => {
          res = res.sort((a,b) => a.mythicScores.all < b.mythicScores.all ? 1 : -1);
          htmlToImage(res).then(() => {
            msg.channel.send({files: ['./image.png']});
          });
        });
      }

      if(!msg.content.includes('addProfile')) {
        return;
      }
      let data = msg.content.split(' ');
      let name = data[1];
      let server = data[2];
      database.addProfile({name, server, mythicScores: {all: 1}});
      return;
    }

    if(msg.channel.name === 'bot-animator') {
      let message = msg.content;
      for(let commonPhrase of commonSlang) {
        var regEx = new RegExp(commonPhrase.name, "g");
        message = message.replace(regEx, commonPhrase.value);
      }
      
      setTimeout(() => {
        msg.delete();
      }, 60 * 1000);
      voiceAgent.voiceQuote(message);
      return;
    }


    if(msg.channel.name === 'meow-at-work') {
      const meowVoice = constants.botVoices[8].value;
      let message = msg.content;

      // Fix content for bot proper pronouncing
      for(let commonPhrase of commonSlang) {
        var regEx = new RegExp(commonPhrase.name, "g");
        message = message.replace(regEx, commonPhrase.value);
      }
      
      // Delete message after 1 min.
      setTimeout(() => {
        msg.delete();
      }, 60 * 1000);
      return voiceAgent.voiceQuote(message, meowVoice);
    }

    if(msg.content === 'listVoices') {
      return msg.reply(prepareVoicesList());
    }

    if(msg.content && msg.content.toLocaleLowerCase().startsWith('addquote')) {
      let parts = msg.content.split(' ')
      parts.shift();
      let quote = parts.join(' ');
      return database.addQuote(quote).then(() => {
        updateQuotes();       
        msg.reply(`New quote "${quote}" successfully set. Enjoy =)`);
      });
    }
    if(msg.content && msg.content.toLocaleLowerCase().startsWith('listquotes')) {
      return database.getAllQuotes().then(quotes => {      
        msg.reply('\n\n' + quotes);
      });
    }

    if(msg.content.includes('setVoice')) {
      let index = Number(msg.content.split(' ')[1]);
      voiceAgent.setVoice(index);
      return msg.reply('Successfully set voice ' + constants.botVoices[index].name);
    }


    if(msg.content.includes('updateSlangs')) {
      return updateSlangs();
    }

    // Add addition slang to db and update in memory
    // example: slang omg oh my god
    if(msg.content.startsWith('slang')) {
      let data = msg.content.split(' ');
      let name = data[1];
      data.shift();
      data.shift();
      let value = data.join(' ');
      return database.addSlang({name, value}).then(() => {
        updateSlangs();
      });
    }
    

    if(msg.content === 'quote'){
      let replyQuote = commonQuotes[Math.floor(Math.random() * commonQuotes.length)];
      voiceAgent.voiceQuote(replyQuote);
      msg.reply(replyQuote);
      console.log(commonQuotes);
      return;
    }
  });



 function prepareVoicesList() {
   let reply = '\n';
   for(let i of Object.keys(constants.botVoices)) {
     reply += i + '. ' + constants.botVoices[i].name + '\n';
   }
   reply += 'To set bot voice, use command example: setVoice 1';
   return reply;
 }


 // Fetch slangs from db and update it in memory
 function updateSlangs() {
    database.getAllSlangs().then(res => {
      let tempSlangs = [];
      for(let slang of res) {
        tempSlangs.push({name: slang.name, value: slang.value});
      }
      commonSlang = tempSlangs;
    });
 }

 function updateQuotes() {
   database.getAllQuotes().then(res => {
     commonQuotes = res;
   })
 }
