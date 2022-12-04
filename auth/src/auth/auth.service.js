const { compareHash, hash } = require("./auth.helper");

class AuthService {
  User;
  constructor(User) {
    this.User = User;
  }

  async attemptLogin(email, password) {
    try {
      const user = await this.User.findOne({ email });
      if (!user) throw new Error("Authentication failed");

      const isValidPassword = compareHash(password, user.password);

      if (!isValidPassword) throw new Error("Authentication failed");

      const loggedInUser = JSON.parse(JSON.stringify(user));;
      delete loggedInUser.password;

      return loggedInUser;
    } catch (err) {
      
      throw err;
    }
  }

  async registerUser(email, password){
    try{
        const user = await this.User.findOne({email})
        if(user)
            throw new Error("user already exists")
        //We need to hash the password
        const hashedPassword = await hash(password)
        const newUser = await new this.User({email, password: hashedPassword}).save();
        const registeredUser = JSON.parse(JSON.stringify(newUser));
       delete registeredUser.password
        return registeredUser;

    }catch(err){
        throw err;
    }
  } 
}

module.exports = AuthService;
