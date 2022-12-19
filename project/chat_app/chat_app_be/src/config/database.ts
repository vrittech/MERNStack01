import mongoose from "mongoose"
import { ENVIRONMENT } from "./vars"

export interface IDbConnection{
    connectToDb : () => Promise<void>
    disconnect : () => Promise<void>
}
export default class DbConnection implements IDbConnection {
    constructor(){
        mongoose.set('strictQuery', false)
    }
    async connectToDb():Promise<void>{
       await  mongoose.connect(ENVIRONMENT.DB_URI)
       console.log("Database connected successfully")
    }

    async disconnect(): Promise<void>{
        await mongoose.disconnect()
    }
    
}