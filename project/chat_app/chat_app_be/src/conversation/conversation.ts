import mongoose, { Mongoose } from "mongoose"

export interface IConversation {
   
    conversation_name : string,
    members : IMember[],
}

export interface IMember { 
    name : string,
    surname : string
}



export const MemberSchema = new mongoose.Schema<IMember>({
    name : {
        type : String,
        required : [true, "Member name is required"]
    },
    surname : {
        type : String,
        required : [true, "Member surname is required"]
    },

})


 const ConversationSchema = new mongoose.Schema<IConversation>({
    conversation_name : {
        type: String,
        required: [true, "Conversation Name is required"]
    },
    members: [MemberSchema]
})


 const ConversationModel = mongoose.model('Conversation', ConversationSchema)
 export default ConversationModel

