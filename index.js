const Discord = require('discord.js');
require('dotenv').config();
const constants = require('./utils/constants');

const db = require('./db/client');
const database = new db();

const replyTimeout = 3 * 60 * 1000;
let lastReplied = Date.now() - replyTimeout;

const client = new Discord.Client();


client.on('ready', () => {
    console.log('Bot is ready');


    const testChannel = client.channels.cache.find(channel => channel.name === 'test');
    const slackersRoom = client.channels.cache.find(channel => channel.name === constants.channelNames.casualSlackersDungeonGroup);
    
    slackersRoom.join();
    testChannel.send(constants.quotes.SOBRIL_WELCOME);
    setTimeout(() => {
      slackersRoom.leave();
    }, 10 * 1000);
   
  });

  client.login(process.env.BOT_TOKEN);

  client.on('message', (msg) => {
    if(msg.author.username === constants.profileNames.botName) {
      return;
    }

    if(canReply()) {
      lastReplied = Date.now();
      if(msg.author.username === 'Whitemist (Erik)') {
        msg.reply(constants.quotes.YOU_DO_CARE_ERIK);
      } else {
        msg.reply(constants.quotes.YOU_DO_CARE);
      }
      console.log(msg.content);
    }
  });

function canReply() {
  return (Date.now() > (lastReplied + replyTimeout));
 }