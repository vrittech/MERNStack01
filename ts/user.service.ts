import { IUser } from "./IUser";

export class UserService implements IUser<string> {
  findOne(email:string) {
    return email;
  }
}
