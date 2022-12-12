require('dotenv').config({})
module.exports = {
    ENVIRONMENT : process.env.ENVIRONMENT ?? 'DEVELOPMENT',
    PORT : process.env.PORT ?? 8000,
    DB_URL : process.env.DB_URL
}