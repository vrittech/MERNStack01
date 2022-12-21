import express from 'express';
import ConversationController from './converstaion.controller';
import memberRouter from './member/member.routes';
import messageRouter from './message/message.routes';

const conversationRouter  = express.Router();

conversationRouter.use('/messages', messageRouter);
conversationRouter.use('/members', memberRouter);

conversationRouter.post('/', ConversationController.create);



conversationRouter.get('/', ConversationController.getAll);


export default conversationRouter;