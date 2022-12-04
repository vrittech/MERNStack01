const authService = require(".");

const AuthController = {
  loginUser: async (req, res) => {
    const { email, password } = req.body;

    try {
      const loggedInUser = await authService.attemptLogin(email, password);
      return res.status(200).json({
        message: "Logged in successfully",
        user: loggedInUser
      });
    } catch (err) {
      return res.status(401).json({
        message: "Not Authenticated",
        error: err.message,
      });
    }
  },

  registerUser: async (req, res) => {
    const { email, password } = req.body;
    try {
      const registeredUser = await authService.registerUser(email, password);
      return res.status(200).json({
        message: "User created sucessfully",
        user: registeredUser,
      });
    } catch (err) {
      return res.status(400).json({
        message: "there was some error while registering the user",
        err: err.message,
      });
    }
  },
};

module.exports = AuthController;
