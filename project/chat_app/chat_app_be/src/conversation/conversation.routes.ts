import express from 'express';
import ConversationController from './converstaion.controller';
import messageRouter from './message/message.routes';

const conversationRouter  = express.Router();

conversationRouter.use('/messages', messageRouter);

conversationRouter.post('/', ConversationController.create);



conversationRouter.get('/', ConversationController.getAll);


export default conversationRouter;