import mongoose from "mongoose";
import { IMember } from "./member";

export interface IMemberService {
    createMember(name : string, surname : string): Promise<IMember>,
    getMember(filters : {}): Promise<IMember | null>
}
class MemberService implements IMemberService{
    private _model;
    constructor(_model : mongoose.Model<IMember>){
        this._model = _model;
    }   
    async createMember(name: string, surname: string): Promise<IMember> {
        const member = await this._model.create({name, surname});
        return member;
    }

    async getMember(filters : {}): Promise<IMember | null>{
        const member = await this._model.findOne({...filters});
        return member;
    }
}

export default MemberService