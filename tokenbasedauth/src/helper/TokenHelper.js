const { JWT_SECRET } = require("../config/vars");
const jwt = require("jsonwebtoken");
const TokenHelper = {
  generateToken: async (payload, options = { expiresIn: "1m" }) => {
    const token = jwt.sign(payload, JWT_SECRET, { ...options });

    return token;
  },

  verifyToken: async (token) => {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  },

  generateRefreshToken : async(payload, options = {expiresIn: '7d'}) => {
    const token = jwt.sign(payload, JWT_SECRET, { ...options });

    return token;
  }
};

module.exports = TokenHelper;
