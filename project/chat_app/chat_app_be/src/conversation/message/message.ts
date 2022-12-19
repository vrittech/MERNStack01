import mongoose, { Schema } from "mongoose";
import ConversationModel from "../conversation";

export interface IMessage{
    type : 'text' | 'image',
    message : string,
    from_id : mongoose.Types.ObjectId,
   
    conversation_id : mongoose.Types.ObjectId
}

const MessageSchema = new mongoose.Schema<IMessage>({
    type : {
        type: String,
        enum : ['text', 'image'],
        required : [true, "Message type is required"],
        default :'text'
    },
    message : {
        type :String,
        required : [true, "Message is required"]
    },
    from_id : {
        type: Schema.Types.ObjectId,
        required: [true, "From is required"]
    },
    conversation_id : {
        type : Schema.Types.ObjectId,
        required : [true, "Conversation id is required"],
        ref: ConversationModel
    }
  
})

MessageSchema.virtual('from', {
    ref: ConversationModel,
    localField : "from_id",
    foreignField : "members._id",
    justOne: true

})

const MessageModel =  mongoose.model('message', MessageSchema)

export default MessageModel

