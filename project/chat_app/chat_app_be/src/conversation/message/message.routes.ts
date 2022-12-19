import express from 'express';
import MessageController from './message.controller';

const messageRouter  = express.Router();


messageRouter.post('/', MessageController.createMessage);

messageRouter.get('/all/:conversation_id', MessageController.getMessagesOfConversation);


export default messageRouter;