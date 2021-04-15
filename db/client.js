var MongoClient = require('mongodb').MongoClient

const DB_NAME = 'slackers';
const url = 'mongodb://localhost:27017/';

module.exports = class Database {
    
    addProfile(profile) {
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db(DB_NAME);
            dbo.collection("profiles").insertOne(profile, function(err, res) {
              if (err) throw err;
              console.log("1 document inserted");
              db.close();
            });
          });
    }

    getProfile(profile) {
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db(DB_NAME);
            dbo.collection("profiles").find(profile).toArray(function(err, res) {
              if (err) throw err;
              console.log(res);
              db.close();
            });
          });
    }

    isConnected() {
        return this.client.isConnected();
    }
}



