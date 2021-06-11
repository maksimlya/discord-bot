var MongoClient = require('mongodb').MongoClient

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
                console.log("1 document updated" + profile);
                resolve();
                });
            });
        });
    },

    getProfile: profile => {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, function(err, db) {
                if (err) {
                    reject(err);
                }
                var dbo = db.db(DB_NAME);
                dbo.collection("profiles").find(profile).toArray(function(err, res) {
                if (err) {
                    reject(err);
                }
                db.close();
                resolve(res[0]);
                });
            });
        })
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



