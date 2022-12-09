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

import { IUser } from "./IUser";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

const number1 = 1;
const number2 = 2;
console.log(number1 + number2);
let myNumber: number;

myNumber = 1;

let myString = "1";

const myFunction = (number1: string, number2: number): string => {
  return number1 + number2;
};

myFunction("1", 2);

//types
type personalObject = {
  name: string;
  email?: string;
};

type officeObject = {
  personalInfo: personalObject;
  officeEmail: string;
};

const officeObject: officeObject = {
  personalInfo: { name: "Sushil" },
  officeEmail: "sushilpokhrel@kotuko.it",
};

type User = {
  name: string;
  email: string;
  googleLogin: boolean;
};

interface SuccessReponse {
  message: string;
}
interface LoggedInSucessData {
  user: User;
  token: string;
  refreshToken: string;
}
interface LoginSuccess extends SuccessReponse {
  data: LoggedInSucessData;
}
let response: LoginSuccess = {
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

const userController = new UserController(new UserService());
const email = userController.getUser();

console.log(email);

class NewUserService implements IUser<LoginSuccess> {
  findOne(email: LoginSuccess) {
    return email;
  }
}

const newUserService = new NewUserService();
console.log(newUserService.findOne(response))
