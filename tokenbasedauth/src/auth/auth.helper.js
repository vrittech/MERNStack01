const bcrypt = require("bcryptjs");
const SALT_ROUNDS = 10;
const AuthHelper = {
  compareHash: async (plainString, hash) => {
   
    const isValidHash = await bcrypt.compare(plainString, hash);
    return isValidHash;
  },

  hashPassword: async (plainPassword) => {
    const hash = await bcrypt.hash(plainPassword, SALT_ROUNDS);
    return hash
  },
};

module.exports = AuthHelper;
