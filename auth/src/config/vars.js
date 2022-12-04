require('dotenv').config({})
module.exports  = {
    MONGODB_URI : process.env.MONGO_URI,
    PORT: process.env.PORT
}