const { JWT_SECRET } = require("../config/vars");
const jwt = require("jsonwebtoken");
const TokenHelper = {
  generateToken: async (payload, options = { expiresIn: "1h" }) => {
    const token = jwt.sign(payload, JWT_SECRET, { ...options });

    return token;
  },

  verifyToken: async (token) => {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  },
};

module.exports = TokenHelper;
