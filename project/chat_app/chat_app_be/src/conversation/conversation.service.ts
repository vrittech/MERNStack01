import mongoose, { HydratedDocument } from "mongoose";
import { IConversation, IMember } from "./conversation";

interface IConversationService { 
    createConversation(name: string, members : IMember[]) : Promise<IConversation>,
    getAllConverstaions() : Promise<IConversation[]>
}
class ConversationService implements IConversationService { 
    private _model;
    constructor(_model: mongoose.Model<IConversation>){
        this._model = _model;
    }
    async createConversation(name :string, members : IMember[]): Promise<IConversation> {
        const newConverstaion = this._model.create({
            conversation_name : name,
            members
        })
        return newConverstaion;
    }

    async getAllConverstaions(): Promise<IConversation[]> {
        const allConversations = await this._model.find()
        return allConversations
    }
}

export default ConversationService