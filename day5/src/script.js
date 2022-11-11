// // // Object oriented Programming
// // // class -> Blueprint
// // // Object -> which gets created from the class
// // // OOP terminologies
// // // OOP concepts (c++, java)

// // class Person {
// //     //Property
// //     name = 'Sushil';
// //     age = 20;


// //     //Methods
// //     getName (name){
// //         return name;
// //     }

// // }



// // // object
// // const person1 = new Person();
// // const person2 = new Person()
// // console.log(person1.getName('Sushil'))
// // console.log(person2.getName('Abhishek'))


// // // Constructor
// // // function
// // // is called whenever a object is created

// // class Bike {
// //     engineNo;
// //     vin;
// //     color
// //     constructor( engineNo, vin, color){
// //        console.log('Parent called')
// //         this.engineNo = engineNo;
// //         this.vin = vin;
// //         this.color = color;
// //     }

// //     sound(){
// //         return 'vroom';
// //     }
// // }

// // // const bike1 = new Bike('Pulsar 150', '123', '123', 'red')
// // // const bike2 = new Bike('Pulsar 150', '1234', '1234', 'red')
// // // console.log(bike1.sound())
// // // console.log(bike1.vin)

// // // Inheritance
// // class Pulsar extends Bike {
// //     model;
// //     constructor(engineNo, vin, color, model){
// //         console.log('Child Called');
// //         super(engineNo, vin, color)
// //         this.model = model
// //     }

// //     get engineNo(){
// //         return this.engineNo;
// //     }

// //     sound(){
// //         return 'vroom1'
// //     }
// // }

// // class Scooter extends Bike {
// //     model;
// //     constructor(engineNo, vin, color, model){
// //         console.log('Child Called');
// //         super(engineNo, vin, color)
// //         this.model = model
// //     }

// //     get engineNo(){
// //         return this.engineNo;
// //     }

// //     sound(){
// //         return 'chi chi'
// //     }
// // }

// // const pulasr150 = new Pulsar('1234567', '1234567', 'black', 'Pulasr 150')
// // console.log(pulasr150.sound())

// // const scooter = new Scooter('12345678', '12345678', 'black', 'Aviator')
// // console.log(scooter.sound())

// // /* 
// // Person -> Parent

// // Man -> Child

// // Woman -> Child


// // */

// // class Human{
// //     height;
// //     body_color;
// //     weight;
// //     constructor(height, body_color, weight) {
// //         this.height = height;
// //         this.body_color = body_color;
// //         this.weight = weight;
// //     }

// //     static start(){
// //         return 'a';
// //     }
   
// // }
// // class Man extends Human{
// //     name;
// //     constructor(name, height, body_color, weight){
// //         super(height, body_color, weight) 
// //         this.name = name  
// //     }
// // }

// // const man1 = new Man("manish",5, 'white', 34);


// // class Person {
// //     fullName;
// //     age;
// //     roll;
// //     constructor(fullName, age,roll){
// //         this.fullName= fullName;
// //         this.age = age;
// //         this.roll = roll;
// //     }
// //     get roll(){
// //         return this.roll;
// //     }
// // }

// // class Men extends Person {
// //     gender;
// //     constructor(fullName,age,roll,gender){
// //         super(fullName,age,roll);
// //         this.gender = gender;
// //     }
// //     get menInfo(){
// //         return(`Gender : ${this.gender} name: ${this.fullName} roll : ${this.roll} Age : ${this.age} `)
// //     }
    
// // }

// // class Women extends Person {
// //     gender;
// //     constructor(fullName,age,roll,gender){
// //         super(fullName,age,roll);
// //         this.gender = gender;
// //     }
// //     get womenInfo(){
// //         return(`Gender : ${this.gender} name: ${this.fullName} roll : ${this.roll} Age : ${this.age} `)
// //     }
// // }


// // const men1 = new Men('menexample',21,7,'Male');

// // console.log(men1.menInfo);

// // const women1 = new  Women('example', 19, 77, 'Women');
// // console.log(women1.womenInfo);

// //JSON 
// // XHR request
// // XHR API
// // fetch API
// // (async function (){
// //    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
// //    const data = await response.json()
  
// //    const todosElement = document.getElementById('todos')
// //    const todos = data.reduce((acc, curr) => {
// //      acc = acc + "<li>"+curr.title+ "</li>"
// //      return acc;
// //    },'<li></li>')
// //    todosElement.innerHTML = todos

// // })()

// let n = 0;
// let arr = [];

// let promise = new Promise((resolve) => {
//     for (let i = 1; i < n; i++) {
//         if (i % 2 == 0) {
//             arr.push(i);
//         }
//     }
//     if (arr.length > 0) {
//         resolve(arr);
//     }

   
// });

// (async function (){
//     await promise()

//     console.log("A")
// })


class Person {
    eyes;
    skintone;
    fingerprint;
    bones;


    constructor(eyes, skintone, fingerprint, bones) {
        this.eyes = eyes;
        this.skintone = skintone;
        this.fingerprint = fingerprint;
        this.bones = bones;
    }



}

class American extends Person {
    height;
    nose_height = '10cm';
    constructor(eyes, skintone, fingerprint, bones, height, nose_height) {
        super(eyes, skintone, fingerprint, bones)
        this.height = height;
        // this.nose_height = nose_height
        console.log(`This is American's  ${this.eyes} eyes and ${this.nose_height} nose`)
    }
}

class Korean extends Person {
    height;
    nose_height = '6cm';
    constructor(eyes, skintone, fingerprint, bones, height, nose_height) {
        super(eyes, skintone, fingerprint, bones)
        this.height = height;
        // this.nose_height = nose_height
        console.log(`This is Korean's ${this.eyes} eyes and ${this.nose_height} nose`)
    }



}


const person1 = new American('big', 'white', 'square', 'white', 'tall');
const person2 = new Korean('small', 'yellow', 'round', 'white', 'short' );

console.log(person1);
console.log(person2);
