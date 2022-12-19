import mongoose from "mongoose";
import { IMessage } from "./message";

interface IMessageService { 
    createMessage(type : 'text' | 'image', from : mongoose.Types.ObjectId, message : string, conversation_id : mongoose.Types.ObjectId) : Promise<IMessage>,
    getMessagesofConverstaion(conversation_id: string) : Promise<IMessage[]>
}
export default class MessageService implements IMessageService{
    private _model
    constructor(_model : mongoose.Model<IMessage>){
        this._model = _model;
    }
    async createMessage(type: "text" | "image", from: mongoose.Types.ObjectId, message: string, conversation_id: mongoose.Types.ObjectId): Promise<IMessage> {
       const createdmessage = await this._model.create({
        type,
        from_id : from,
        message,
        conversation_id
       })
       return createdmessage;
    }

    async getMessagesofConverstaion(conversation_id : string): Promise<IMessage[]> {
       const messages = await this._model.find({
        conversation_id
       }).populate("conversation_id")
       return messages;
     }
}