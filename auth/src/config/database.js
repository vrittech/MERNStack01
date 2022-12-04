const mongoose = require("mongoose");
const { MONGODB_URI } = require("./vars");
class Connection {
  connectToDb() {
    throw new Error("Cannot implement this method on parent Class");
  }
}

class MongoConnection extends Connection {
  connectToDb() {
    return new Promise((resolve, reject) => {
      mongoose.connect(MONGODB_URI, (err) => {
        if (err) {
          reject(err);
        }
        resolve();
      });
    });
  }
}

class MySQLConnection extends Connection{
    async connectToDb(){
        return "Connected successfully"
    }
}





module.exports = {MongoConnection, MySQLConnection};
