const Queue = require('promise-queue');
const constants = require('../utils/constants');
var queue = new Queue(1);
const say = require('say');
const ytdl = require('ytdl-core')

class VoicePlayer {
    constructor(client) {
        this.client = client;
        this.voiceBroadcast = client.voice.createBroadcast();
        this.musicBroadcast = client.voice.createBroadcast();
        this.voiceTunnel = null;
        this.voice = constants.botVoices[1].value;
    }

    voiceQuote = (quote, customVoice) => {
        queue.add(() => new Promise((resolve, reject) => {
      
          say.export(quote, customVoice || this.voice, 1, 'voice.wav', err => {
              if(err) {
                console.error(err);
              }
              try {
                const dispatcher = this.voiceTunnel.play('./voice.wav');
                dispatcher.on('finish', () => {
                    resolve();
                    this.voiceTunnel.play(this.musicBroadcast);
                });
                setTimeout(resolve, 10 * 1000);
              } catch(err) {
                console.error('[voiceQuote] failed ', err);
                resolve();
              }
            }); 
        }));
      }

      handleMusicCommand = content => {
        if(content.startsWith('volume')) {
            const volume = content.split(' ')[1];
            this.musicDispatcher.setVolume(volume/100);
            return;
          }
          if(content.startsWith('pause')) {
            this.musicDispatcher.pause();
            return;
          }
          if(content.startsWith('resume')) {
            this.voiceTunnel.play(this.musicBroadcast);
            this.musicDispatcher.resume();
            return;
          }
          if(content.startsWith('https://www.youtube.com/watch')) {
            try {
              this.musicDispatcher = this.musicBroadcast.play(ytdl(content), {volume: 0.05});
              this.voiceTunnel.play(this.musicBroadcast);
              return;
            } catch(err) {
              console.error('music-order cant play ',  err);
            }
          }
      }

      setVoiceTunnel = voiceTunnel => {
          this.voiceTunnel = voiceTunnel;
      }

      setVoice = index => {
        if(constants.botVoices[index]) {
          this.voice = constants.botVoices[index].value;
          console.log('Successfully set voice ' + this.voice);
        } else {
          console.error('Not supported voice index!!! ' + index);
          throw 'Error';
        }
       }

      prepareGreeting = (prevState, newState) => {
        let greeting = '';
        // User muted itself
        if(!prevState.selfMute && newState.selfMute) {
          greeting = (constants.profileNames[newState.member.user.username] || newState.member.user.username) + ' muted himself';
        }

        if(prevState.selfMute && !newState.selfMute) {
          greeting = (constants.profileNames[newState.member.user.username] || newState.member.user.username) + ' unmuted himself';
        }

        if(!prevState.streaming && newState.streaming) {
          greeting = (constants.profileNames[newState.member.user.username] || newState.member.user.username) + ' started a stream';
        }

        if(prevState.streaming && !newState.streaming) {
          greeting = (constants.profileNames[newState.member.user.username] || newState.member.user.username) + ' stopped a stream';
        }



        if(!prevState.channel && newState.channel && newState.channel.name === constants.channelNames.casualSlackersDungeonGroup) {
          let name = constants.profileNames[newState.member.user.username] || newState.member.user.username;
          let period;
          let hours = new Date().getHours();
          if(hours < 6) {
            period = 'night';
          } else if(hours < 13 ) {
            period = 'morning';
          } else if(hours < 19) {
            period = 'afternoon';
          } else {
            period = 'evening';
          }
          greeting = `Hi di ho, good ${period} ${name}`;
        }

        if(prevState.channel && !newState.channel) {
          greeting = (constants.profileNames[newState.member.user.username] || newState.member.user.username) + ' left the channel';
        }

        return greeting;
      }
}

module.exports = {
    VoicePlayer
}



  