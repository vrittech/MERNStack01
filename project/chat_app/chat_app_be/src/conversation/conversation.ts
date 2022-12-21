import mongoose, { Mongoose } from "mongoose"

export interface IConversation {
   
    conversation_name : string,
    members : mongoose.Types.ObjectId[],
}


 const ConversationSchema = new mongoose.Schema<IConversation>({
    conversation_name : {
        type: String,
        required: [true, "Conversation Name is required"]
    },
    members: [
        {
            type : mongoose.Types.ObjectId,
            ref : "member"
        }
    ]
})


 const ConversationModel = mongoose.model('Conversation', ConversationSchema)
 export default ConversationModel

