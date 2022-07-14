const MongoClient = require('mongodb').MongoClient
const constants = require('../utils/constants');

const DB_NAME = 'slackers';
const url = 'mongodb://localhost:27017/';


module.exports = {
    addQuote: quote => {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, function(err, db) {
                if (err) {
                    reject(err);
                }
                var dbo = db.db(DB_NAME);
                dbo.collection("quotes").insertOne({value: quote}, function(err, res) {
                if (err) {
                    reject(err);
                }
                db.close();
                resolve();
                });
            });
        });
    },
    getAllQuotes: () => {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, function(err, db) {
                if (err) {
                    reject(err);
                }
                var dbo = db.db(DB_NAME);
                dbo.collection("quotes").find({}).toArray(function(err, res) {
                if (err) {
                    reject(err);
                }
                db.close();
                resolve(res.map(a=>a.value));
                });
            });
        });
    },
    addProfile: profile => {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, function(err, db) {
                if (err) {
                    reject(err);
                }
                var dbo = db.db(DB_NAME);
                dbo.collection("profiles").insertOne(profile, function(err, res) {
                if (err) {
                    reject(err);
                }
                db.close();
                resolve();
                });
            });
        });
    },

    updateProfile: profile => {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, function(err, db) {
                if (err) {
                    reject(err);
                }
                var dbo = db.db(DB_NAME);
                var myquery = { name: profile.name, server: profile.server };
                var newvalues = { $set: {...profile}};
                
                dbo.collection("profiles").updateOne(myquery, newvalues, function(err, res) {
                if (err) {
                    reject(err);
                }
                db.close();
                console.log("1 document updated");
                resolve();
                });
            });
        });
    },

    getProfile: name => {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, function(err, db) {
                if (err) {
                    reject(err);
                }
                var dbo = db.db(DB_NAME);
                dbo.collection("profiles").find({name}).toArray(function(err, res) {
                if (err) {
                    reject(err);
                }
                db.close();
                resolve(res[0]);
                });
            });
        })
    },

    prepareProfileBestRuns: async name => {
        const profile = await module.exports.getProfile(name);
        const allBestRuns = profile.allBestRuns.concat(profile.allBestAltRuns);

        let fortifiedScore = 0;
        let tyrannicalScore = 0;
        const allRuns = {};
        for(let dungeon of constants.mythisShortNames) {
            allRuns[dungeon] = {};
        }
        for(let dungeon of allBestRuns) {
            const affix = dungeon.affixes[0].name;
            allRuns[dungeon.short_name][affix] = dungeon;
            if(affix == 'Tyrannical') {
                tyrannicalScore += dungeon.score;
            } else {
                fortifiedScore += dungeon.score;
            }
        }
        tyrannicalScore = tyrannicalScore.toFixed(2);
        fortifiedScore = fortifiedScore.toFixed(2);

        return { 
            allRuns, 
            tyrannicalScore, 
            fortifiedScore, 
            score: profile.mythicScores.all, 
            class: profile.class, 
            covenant: profile.covenant,
            name: profile.name,
            role: profile.role
        }
    },

    getAllProfiles: () => {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, function(err, db) {
                if (err) {
                    reject(err);
                }
                var dbo = db.db(DB_NAME);
                dbo.collection("profiles").find({}).toArray(function(err, res) {
                if (err) {
                    reject(err);
                }
                db.close();
                resolve(res);
                });
            });
        });
    },

    
    getAllSlangs: () => {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, function(err, db) {
                if (err) {
                    reject(err);
                }
                var dbo = db.db(DB_NAME);
                dbo.collection("slangs").find({}).toArray(function(err, res) {
                if (err) {
                    reject(err);
                }
                db.close();
                resolve(res);
                });
            });
        });
    },

    addSlang: slang => {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, function(err, db) {
                if (err) {
                    reject(err);
                }
                var dbo = db.db(DB_NAME);
                slang.value = ` ${slang.value} `;
                dbo.collection("slangs").insertOne(slang, function(err, res) {
                if (err) {
                    reject(err);
                }
                db.close();
                resolve();
                });
            });
        });
    },

    getBlizzardToken: () => {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, (err, db) => {
                if (err) {
                    reject(err);
                }
                var dbo = db.db(DB_NAME);
                dbo.collection("metadata").find({name: 'blizzardToken'}).toArray(function(err, res) {
                    if (err) {
                        reject(err);
                    }
                    db.close();
                    resolve(res[0]);
                    });
            });
        });
    },

    setBlizzardToken: ({ts, token}) => {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, (err, db) => {
                if (err) {
                    reject(err);
                }
                var dbo = db.db(DB_NAME);
                var myquery = { name: "blizzardToken" };
                var newvalues = { $set: {token, ts} };
                dbo.collection("metadata").updateOne(myquery, newvalues, (err, res) => {
                    if (err) {
                        reject(err);
                    }
                    db.close();
                    resolve(res);
                    });
            });
        });
    },

    isConnected: () => {
        return this.client.isConnected();
    }
}



