// // Objects methods

// const person = {
//     firstName : "Sushil",
//     lastName : "Pokhrel"
// }

// // Destructring

// const firstNameWithoutDestructring = person.firstName

// console.log("Without Destructing", firstNameWithoutDestructring)
// const {firstName} = person

// console.log("With Destructing", firstName)

// const keyValue = 
//     [
//         'Our Key',
//         'Our value',
//         'Third Element',
//         'Forth Element'
//     ]


// const [key, value] = keyValue
// console.log("Array destructing", key, value)



// //For loop in object
// // for(const key in person){
// //     console.log(person[key])
// // }

// //Object.keys returns array of keys in that object
// // We can loop through those keys to get the values
//  const keys = Object.keys(person)
//  const values = keys.map((key) => person[key]);

//  //Object.entries
 

//  const keyValuePair = Object.entries(person)
//  // [[key,value], [key, value]]

//  for(let [key, value] of keyValuePair ){
//     console.log(key, value)
//  }


//  //Spread Syntax

//  const string = 'abc';

//  for(let s of string){
//     console.log(s)
//  }


//  function sum(args, ...rest){
//     console.log(args, rest)
// //    return args.reduce((acc, curr) => {
// //     acc = acc + curr
// //     return acc
// //    }, 0)
//  }

//  console.log(sum(1,2,3))


//  function a(){
//     sadasda
//  }

//  const obj = {
//     method : () => {

//     }
//  }
// const myObj = {
//     'firstName' : 'Sushil',
    
    
// }
// //JSON = Javascript Object Notation 


// //Spread operator allows us to make shallow copy
// let newObj = {...myObj}



// myObj.lastName = 'Pokhrel'

// console.log(myObj)

// Object.freeze(newObj)


// newObj = {...newObj, firstName : 'Samip', lastName : 'Pokhrel'}

// let newArray = [1,2,3]

// newArray = [...newArray, 4,5]
// console.log(newArray)


// //DeStructuring

// const [first,second,third] = [1,2,3]



// const array1 = [1,2,3]
// const array2 = [3,4,5]

// const array3 = [...array1, ...array2]
// console.log(array3)


// // Arrow Functions

// let myFunction = (sadasda, sadasdas) => {
//     console.log(this)
//     return '1'
// }
// class A{

// }

// console.log(myFunction())


// // Call, Apply and Bind

// const person = {
//     firstName : "Sushil",
//     getFirstName(){
//         return this.firstName
//     }
// }


// function a(customMessage, seperator){
//     console.log(customMessage, seperator, this.getFirstName())
//     console.log(this.firstName)
// }


// a.call(person, 'Called with call method', ',')

// a.apply(person, ['called with apply method', '.'])

// let bindedFunction = a.bind(person);

// bindedFunction('called with bind', '+')


// Async behaviour of Javascript
// Single Threaded
// Async
// Non Blocking


// for(let i = 0; i<=1000000000000; i++){
//     console.log(i)
// }


function filter(array, cb){
    let filteredArray = [];
    for(let a of array ){
        if(cb(a)){
            filteredArray.push(a)
        }
    }
    return filteredArray
}



let array = [1,2,3,4,5,6,7,8,9]



const filteredArray = filter(array, function (element) 
{ return element > 1
} )

// console.log(filteredArray)

//Promise

const  checkIfNumberIsOneOrNot = (number) => {
    return new Promise((resolve, reject) => {
        if(number === 1){
            resolve(true)
        }
        reject(false)
    })
} 

checkIfNumberIsOneOrNot(2)
.then(result => console.log(result))
.catch((err) => console.log(err))

console.log('As')

