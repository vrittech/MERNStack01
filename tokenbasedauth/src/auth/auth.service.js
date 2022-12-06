const TokenHelper = require("../helper/TokenHelper");
const AuthHelper = require("./auth.helper");
class AuthService {
  User;
  constructor(User) {
    this.User = User;
  }

  async attemptLogin(email, password) {
    const user = await this.User.findOne({ email });
    if (!user) {
      throw new Error("Auth Failed");
    }
    // Compare the password
    const isValidPassword = await AuthHelper.compareHash(
      password,
      user.password
    );
    if (!isValidPassword) throw new Error("Auth Failed");

    // generate the token
    const token = await TokenHelper.generateToken({ id: user._id });
    //Also generate a refresh token
    const refreshToken = await TokenHelper.generateRefreshToken({id: user._id, type : "refresh"})
    const loggedInUser = JSON.parse(JSON.stringify(user));

    return { loggedInUser, token, refreshToken };
  }

  async registerUser(email, password) {
    const user = await this.User.findOne({ email }, "-password");
    if (user) {
      throw new Error("User already exists");
    }

    const hashedPassword = await AuthHelper.hashPassword(password)
    const newUser = new this.User({email, password : hashedPassword}).save()


    return newUser


  }
}

module.exports = AuthService;
