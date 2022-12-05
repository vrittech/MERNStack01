const AuthService = require("./index");
const AuthController = {
  login: async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body;

    //Some business logic
    try {
      const { token, loggedInUser } = await AuthService.attemptLogin(
        email,
        password
      );

      return res.status(200).json({
        message: "Logged in successfully",
        data: {
          user: loggedInUser,
          token,
        },
      });
    } catch (err) {
      console.log(err);
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
};

module.exports = AuthController;
