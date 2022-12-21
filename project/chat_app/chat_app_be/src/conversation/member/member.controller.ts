import {Request, Response} from 'express';
import MemberModel from './member';
import MemberService from './member.service';
const MemberController = {
     createMember : async (req: Request,res: Response) => {
        const {name, surname}  = req.body;
        try{
            const memberService = new MemberService(MemberModel)
            const member = await memberService.createMember(name, surname)
            return res.status(200).json({
                member,
                message : "Member created successfully"
            })
        }catch(err){
            return res.status(400).json({
                message : "There was some problem creating the member",
                err: JSON.stringify(err)
            })
        }
    }
}

export default MemberController;