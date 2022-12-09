"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    constructor(User) {
        this.User = User;
    }
    getUser() {
        const response = this.User.findOne("sushil.pokhrel@gmail.com");
        return response;
    }
}
exports.UserController = UserController;
