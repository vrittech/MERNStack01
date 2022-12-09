import { IUser } from "./IUser";

export class UserController{
    private User;
    constructor(User: IUser<string>){
        this.User = User
    }

    getUser(): string{
        const response = this.User.findOne("sushil.pokhrel@gmail.com")
        return response;
    }
}