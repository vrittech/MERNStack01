import {Request, Response} from 'express';
import mongoose from 'mongoose';
import socketService from '../../utils/SocketService';
import ConversationModel from '../conversation';
import ConversationService from '../conversation.service';
import MessageModel from './message';
import MessageService from './message.service';
 const MessageController = {
    createMessage : async (req: Request, res: Response) => {
        const {
           
            message,
           
            type
        } = req.body;

        const conversation_id = new mongoose.Types.ObjectId(req.body.conversation_id)
        const from_id = new mongoose.Types.ObjectId(req.body.from);

        try{
            const messageService = new MessageService(MessageModel);
            const conversationService = new ConversationService(ConversationModel)
            const createdMessage =  await messageService.createMessage(type,from_id, message, conversation_id )
            //What we need to do is send the message to the next person in the conversation;
            const conversation = await conversationService.getConversationById(req.body.conversation_id);
            const members = conversation?.members;
            members?.map((member) => {
                if(member.toString() !== from_id.toString()){
                    socketService.getClient(member.toString())?.socket.send({
                        ...createdMessage
                    })
                }
            })
            return res.status(200).json({
                message : "Message created sucessfully",
                createdMessage
            })
        }catch(err){
            res.status(400).json({
                message : "unable to create a message",
                err
            })
        }

    },

    getMessagesOfConversation : async (req: Request, res: Response) => {
        const {
           
            conversation_id
        } = req.params;

       

        try{
            const messageService = new MessageService(MessageModel);

            const messages =  await messageService.getMessagesofConverstaion(conversation_id )
            return res.status(200).json({
                message : "Message Fetched sucessfully",
                messages
            })
        }catch(err){
            console.log(err)
            res.status(400).json({
                message : "unable to fetch the message",
                err
            })
        }

    }
}

export default MessageController