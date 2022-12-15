import mongoose, {  connect } from 'mongoose';

mongoose.set('strictQuery', false)
export const connectToDB = async () => {
    try{
        await connect('mongodb+srv://admin:admin@cluster0.mcwgvlm.mongodb.net/todos?retryWrites=true&w=majority')
        console.log("Connected to DB Successfully")

    }catch(error){
        throw error
    }
}
