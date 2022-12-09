"use strict";
/*
What is Typescript ?
--> Typescript is superset of Javascript.
--> Typescript is a programming langauge
--> It compiles down to Javascript
--> It is also backward compatible to JS
--> You can write JS code in TS

What is so special about Typescript ?
--> Typescript adds static typing ability to JS
--> This inturns allow us to write cleaner code
--> Introduce fewer bugs
--> Type system in typescript is one of the best
*/
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("./user.controller");
const user_service_1 = require("./user.service");
const number1 = 1;
const number2 = 2;
console.log(number1 + number2);
let myNumber;
myNumber = 1;
let myString = "1";
const myFunction = (number1, number2) => {
    return number1 + number2;
};
myFunction("1", 2);
const officeObject = {
    personalInfo: { name: "Sushil" },
    officeEmail: "sushilpokhrel@kotuko.it",
};
let response = {
    data: {
        user: {
            name: "Sushil",
            email: "sushil@gmail.com",
            googleLogin: true,
        },
        token: "123",
        refreshToken: "123",
    },
    message: "",
};
const userController = new user_controller_1.UserController(new user_service_1.UserService());
const email = userController.getUser();
console.log(email);
class NewUserService {
    findOne(email) {
        return email;
    }
}
const newUserService = new NewUserService();
console.log(newUserService.findOne(response));
