const AuthService = require("./index");
const AuthController = {
  login: async (req, res) => {
  
    const { email, password } = req.body;

    //Some business logic
    try {
      const { token, loggedInUser, refreshToken } = await AuthService.attemptLogin(
        email,
        password
      );

      return res.status(200).json({
        message: "Logged in successfully",
        data: {
          user: loggedInUser,
          token,
          refreshToken
        },
      });
    } catch (err) {
    
      return res.status(401).json({
        message: err.message,
      });
    }
  },

  register: async (req, res) => {
    const { email, password } = req.body;
    
    //Some business logic
    try {
      const registeredUser = await AuthService.registerUser(email, password);

      return res.status(200).json({
        message: "User Created successfully",
        data: {
          user: registeredUser,
        },
      });
    } catch (err) {
      return res.status(400).json({
        message: err.message,
      });
    }
  },

  me: (req, res) => {
    const { user } = req;

    return res.status(200).json({
      user,
    });
  },

  refreshToken : async (req,res) => {
    const {token, refreshToken} = req.tokens;
    return res.status(200).json({
      token,
      refreshToken
    })
  }
};

module.exports = AuthController;
