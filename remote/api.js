const fetch = require("node-fetch");
require('dotenv').config();
const database = require('../db/client');
const constants = require('../utils/constants');

let blizzardToken = {token: '', ts: 0};


const fetchBlizzardTokenFromDb = () => {
    return new Promise((resolve, reject) => {
        database.getBlizzardToken().then(res => {
            blizzardToken.token = res.token;
            blizzardToken.ts = res.ts;
            resolve();
        });
    });
}

const ensureConnection = () => {
    return new Promise((resolve, reject) => {
        if(Date.now() < blizzardToken.ts) {
            return resolve(blizzardToken.token);
        }
        fetchBlizzardToken().then(res => {
            resolve(res.token);
        });
    });
}

const fetchBlizzardToken = () => {
    return new Promise((resolve, reject) => {
        fetch(`https://eu.battle.net/oauth/token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&grant_type=client_credentials`, {method: 'POST'}).then(async response => {
            const res = await response.json();

            let token = res.access_token;
            let ts = Date.now() + res.expires_in;

            blizzardToken.token = token;
            blizzardToken.ts = ts;
            database.setBlizzardToken(blizzardToken);
            resolve(blizzardToken);
        }).catch(err => {
            console.error('fetchBlizzardToken failed ', err);
            reject(err);
        });
    });
}

const fetchRemoteData = async profile => {
    let needUpdate = false;
    const currentScore = profile.mythicScores && profile.mythicScores.all;
    let bestRun = profile.bestRun;
    let mythicResponse, result, messageReply;

    try {
      mythicResponse = await fetch(`https://raider.io/api/v1/characters/profile?region=eu&realm=${profile.server}&name=${profile.name}&fields=mythic_plus_scores_by_season:current,mythic_plus_best_runs,covenant`);
      
      if(mythicResponse.status != 200) {
        return {};
      }
      
      result = await mythicResponse.json();
    } catch (err) {
      console.error('[refreshMythicScores] failed ', err);
      return {};
    }
    
    if(!bestRun || result.mythic_plus_best_runs && JSON.stringify(bestRun) !== JSON.stringify(result.mythic_plus_best_runs[0])) {
      bestRun = result.mythic_plus_best_runs[0];
      profile.bestRun = bestRun;
      needUpdate = true;
    }

    if(!profile.mythicScores) {
      profile.mythicScores =  result.mythic_plus_scores_by_season[0].scores;
      needUpdate = true;
    }

    const newScore = result.mythic_plus_scores_by_season[0].scores.all;
    if(newScore > currentScore) {
       messageReply = `Congratulations ${constants.nameFilter[profile.name] || profile.name} , your mythic score went up from ${Math.round(currentScore)} to ${Math.round(newScore)}!`
    }

    if(JSON.stringify(result.mythic_plus_scores_by_season[0].scores) != JSON.stringify(profile.mythicScores)) {
      profile.mythicScores = result.mythic_plus_scores_by_season[0].scores;
      needUpdate = true;
      let roles = ['tank', 'dps', 'healer'];
      for(let role of roles) {
        if(profile.mythicScores[role] == profile.mythicScores.all) {
          profile.role = role;
        }
      }
    }

    if(!profile.class) {
      profile.class = result.class;
      needUpdate = true;
    }

    // Check if covenant changed..
    if(!profile.covenant || profile.covenant != result.covenant.name) {
      profile.covenant = result.covenant.name;
      needUpdate = true;
    }

    if(needUpdate) {
        return {updatedProfile: profile, messageReply};
    }



    // // Handle pvp scores as well
    // let pvpScores = await api.fetchPvpProfile(profile);
    // if(!profile.pvpScores) {
    //   profile.pvpScores = pvpScores;
    //   needUpdate = true;
    // }
    // if(profile.pvpScores.two < pvpScores.two) {
    //   let messageReply = `Congratulations ${profile.name} , your best 2v2 bracket score is up to ${Math.round(pvpScores.two)}!`
    //   mythicScoresChannel.send(messageReply);
    //   voiceQuote(messageReply);
    //   profile.pvpScores = pvpScores;
    //   needUpdate = true;
    // }
    // if(profile.pvpScores.three < pvpScores.three) {
    //   let messageReply = `Congratulations ${profile.name} , your best 3v3 bracket score is up to ${Math.round(pvpScores.three)}!`
    //   mythicScoresChannel.send(messageReply);
    //   voiceQuote(messageReply);
    //   profile.pvpScores = pvpScores;
    //   needUpdate = true;
    // }
    // if(profile.pvpScores.rbg < pvpScores.rbg) {
    //   let messageReply = `Congratulations ${profile.name} , your best Rated BG's bracket score is up to ${Math.round(pvpScores.rbg)}!`
    //   mythicScoresChannel.send(messageReply);
    //   voiceQuote(messageReply);
    //   profile.pvpScores = pvpScores;
    //   needUpdate = true;
    // }
    return {};
}

const fetchPvpProfile = async profile => {
    await ensureConnection();
    return new Promise(async (resolve, reject) => {
        try {            
            let response2 = await fetch(`https://eu.api.blizzard.com/profile/wow/character/${profile.server}/${profile.name.toLowerCase()}/pvp-bracket/2v2?access_token=${blizzardToken.token}&namespace=profile-eu`);
            let twosResult = await response2.json();

            let response3 = await fetch(`https://eu.api.blizzard.com/profile/wow/character/${profile.server}/${profile.name.toLowerCase()}/pvp-bracket/3v3?access_token=${blizzardToken.token}&namespace=profile-eu`);
            let threesResult = await response3.json();

            let responserbg = await fetch(`https://eu.api.blizzard.com/profile/wow/character/${profile.server}/${profile.name.toLowerCase()}/pvp-bracket/rbg?access_token=${blizzardToken.token}&namespace=profile-eu`);
            let rbgResult = await responserbg.json();

            resolve({two: twosResult.rating, three: threesResult.rating, rbg: rbgResult.rating});
        } catch(err) {
            console.error('fetchPvpProfile ', err);
            reject(err);
        }
        });
}

module.exports = { fetchBlizzardTokenFromDb, fetchPvpProfile, fetchRemoteData };