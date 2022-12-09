const AuthController = require("./auth.controller");
const { verifyUser, generateTokens } = require("./auth.middleware");
const { OAuth2Client } = require("google-auth-library");
const { User } = require(".");
const TokenHelper = require("../helper/TokenHelper");
const { USER } = require("../constants/roles");

const authClient = new OAuth2Client({
  clientId:
    "834432781366-pl3pcclt3bso8n21rsega4cm2j6glpqp.apps.googleusercontent.com",
  clientSecret: "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",
  redirectUri: "http://localhost",
});
const authRouter = require("express").Router();

authRouter.post("/login", AuthController.login);

authRouter.post(
  "/google/login",
  async (req, res, next) => {
    try {
      const { payload } = await authClient.verifyIdToken({
        idToken: req.body.idToken,
      });
      req.user = payload;
      next();
    } catch (err) {
      return res.status(401).json({
        message: "Unauthenticated",
      });
    }
  },
  async (req, res) => {
    const googleUser = req.user;
    //Check if the user is already registered
    const user = await User.findOne({ email: googleUser.email });
    if (user) {
      if (user.googleLogin) {
        //Generate the token and sign in the user;
        const token = await TokenHelper.generateToken({ id: user._id });
        //Also generate a refresh token
        const refreshToken = await TokenHelper.generateRefreshToken({
          id: user._id,
          type: "refresh",
        });
        const loggedInUser = JSON.parse(JSON.stringify(user));
        res.cookie("token", token, {
          httpOnly: true,
          domain: "localhost",
          sameSite: "Lax",
        });
        return res.status(200).json({
          message: "Logged in successfully",
          data: {
            user: loggedInUser,
            token,
            refreshToken,
          },
        });
      }
      //associate google id with the user and send a error response
      user.googleLogin = true;
      await user.save();

      return res.status(409).json({
        message: "User already present. Please try to sign in again",
      });
    }
    //We need to sign in the user
    const registeredUser = new User({
      email: googleUser.email,
      googleLogin: true,
      role: USER,
    });

    const token = await TokenHelper.generateToken({ id: registeredUser._id });
    //Also generate a refresh token
    const refreshToken = await TokenHelper.generateRefreshToken({
      id: registeredUser._id,
      type: "refresh",
    });
    const newUser = JSON.parse(JSON.stringify(registeredUser));
    return res.status(200).json({
      message: "Signed in successfully",
      data: {
        user: newUser,
        token,
        refreshToken,
      },
    });
  }
);
authRouter.post("/register", AuthController.register);

authRouter.post("/refresh_token", generateTokens, AuthController.refreshToken);

authRouter.get("/me", verifyUser, AuthController.me);

module.exports = authRouter;
