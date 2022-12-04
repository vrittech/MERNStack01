const TokenHelper = require("../helper/TokenHelper");
const User = require("../user/user");

const AuthMiddleware = async (req, res, next) => {
  const bearerToken = req.headers.authorization;
    if(!bearerToken){
        return res.status(401).json({
            message: "Bearer token not provided",
          }); 
    }
  

  //Check if the token is a bearer token
  /*
    Bearer token 
    */
  const [bearer, token] = bearerToken.split(" ");
  if (bearer !== "Bearer") {
    return res.status(401).json({
      message: "Bearer token not provided",
    });
  }

  try {
    const {id} = await TokenHelper.verifyToken(token);
   
    //We know that the token is good]
    //Get the user with that id from the database
    const user = await User.findOne({_id : id}, "-password");
    req.user = user;
    next()
  } catch (err) {
    return res.status(401).json({
      message: err.message,
    });
  }
};

module.exports = AuthMiddleware;
