const bcrypt = require("bcryptjs");

//Token based authencation
// Jest testing At least unit testing 
const SALT_ROUNDS = 10;
module.exports = {
  compareHash: async (plainString, hash) => {
    return new Promise((resolve, reject) => {
      bcrypt.compare(plainString, hash, (err) => {
        if (err) {
          reject(err);
        }
        resolve(true);
      });
    });
  },

  hash: async(plainString) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(plainString,SALT_ROUNDS, (hash,err) => {
         
          if (err) {
            reject(err);
          }
          resolve(hash);
        });
      });
  }
};
