import dotenv from 'dotenv';
dotenv.config({})
export const ENVIRONMENT = {
    NODE_ENV : process.env.NODE_ENV,
    PORT : process.env.PORT,
    DB_URI : process.env.DB_URI ?? 'mongodb://localhost:27017/chatApp'
}

