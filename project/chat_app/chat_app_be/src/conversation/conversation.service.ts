import mongoose, { HydratedDocument } from "mongoose";
import { IConversation } from "./conversation";
import { IMember } from "./member/member";

interface IConversationService { 
    createConversation(name: string, members : mongoose.Types.ObjectId[]) : Promise<IConversation>,
    getAllConverstaions() : Promise<IConversation[]>
    getConversationById(filters : {}): Promise<IConversation | null>
}
class ConversationService implements IConversationService { 
    private _model;
    constructor(_model: mongoose.Model<IConversation>){
        this._model = _model;
    }
    async createConversation(name :string, members :  mongoose.Types.ObjectId[]): Promise<IConversation> {
        const newConverstaion = this._model.create({
            conversation_name : name,
            members
        })
        return newConverstaion;
    }

    async getAllConverstaions(): Promise<IConversation[]> {
        const allConversations = await this._model.find().populate("members")
        return allConversations
    }

    async getConversationById(filters : {}): Promise<IConversation | null> {
        const conversation = await this._model.findOne({...filters})
        return conversation
    }
}

export default ConversationService