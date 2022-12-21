import mongoose, { Schema } from "mongoose";
import ConversationModel from "../conversation";
import MemberModel from "../member/member";

export interface IMessage {
  type: "text" | "image";
  message: string;
  from_id: mongoose.Types.ObjectId;

  conversation_id: mongoose.Types.ObjectId;
}

const MessageSchema = new mongoose.Schema<IMessage>(
  {
    type: {
      type: String,
      enum: ["text", "image"],
      required: [true, "Message type is required"],
      default: "text",
    },
    message: {
      type: String,
      required: [true, "Message is required"],
    },
    from_id: {
      type: Schema.Types.ObjectId,
      required: [true, "From is required"],
    },
    conversation_id: {
      type: Schema.Types.ObjectId,
      required: [true, "Conversation id is required"],
      ref: ConversationModel,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

MessageSchema.virtual("from", {
  ref: "member",
  localField: "from_id",
  foreignField: "_id",
  justOne : true
});

const MessageModel = mongoose.model("message", MessageSchema);

export default MessageModel;
