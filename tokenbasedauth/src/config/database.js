const mongoose = require("mongoose");
const { MONGO_URI } = require("./vars");

class Connection {
  connectToDB() {
    throw new Error("Must be overidden by the child");
  }
}

class MongoConnection extends Connection {
  async connectToDB() {
    return new Promise((resolve, reject) => {
      mongoose.connect(MONGO_URI, (err) => {
        if (err) {
          reject(err);
        }
        resolve("Connected to Database successfully");
      });
    });
  }
}

module.exports = {
  MongoConnection,
};
