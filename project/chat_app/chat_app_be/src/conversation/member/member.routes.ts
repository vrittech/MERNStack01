import {Router} from 'express';

import MemberController from './member.controller';
const memberRouter = Router();

memberRouter.post('/', MemberController.createMember);

export default memberRouter;