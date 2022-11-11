// Promises
// Why promises were introduced.

// Async
// Callback hell (Avoid) --------> Syntax


// Promise syntax

// To construct a promise
// We need to initialize the promise with a new keyword
// Promises are always returned
// Functions especially async functions returns a promise
// Those operations that takes a long time to process or blocks an operation
// We never block the thread/event loop

// const thatChecksIfTheNumberIsEvenOrOdd = (number) =>{
//     return new Promise((resolve, reject) => {
//         if(typeof number !== 'number'){
//             reject('Illegal Exception')
//         }
//         if((number%2) === 0){
//             resolve('The number '+number+' is even')
//         }
//         resolve('The number '+number+' is odd')
//     })
// }


const thatChecksIfTheNumberIsEvenOrOdd = async (number) =>{
    
        if(typeof number !== 'number'){
            throw 'Illegal Exception'
        }
        if((number%2) === 0){
            return 'The number '+number+' is even'
        }
        return 'The number '+number+' is odd'
   
}


//await
//Top level

// (async () => {
//     const isEven = await thatChecksIfTheNumberIsEvenOrOdd(1);
//     console.log(isEven)
// })()


// Self Invoking Function
// Anonomyus Function
// const add = (
    
//     () => {
//         let a = 0;
//         console.log("Self invoking funciton",a)
//         return () => {
//             a = a+1;
//             console.log("Inner funtion",a)
//             return a;
//         }
//     }
    
// )()

// console.log("Add is calaled",add())
// console.log("Add called second time", add())

// const add1= function (){
//     let a  = 0
//     console.log("Called when add1 is called",a)
//     return function(){
//         a = a + 1;
//         return a;
//     }
// }

// const nextFunction = add1();

// nextFunction()
// nextFunction()

async function returnsAPromise (){
  console.log(await thatChecksIfTheNumberIsEvenOrOdd(1))
   return '2'
}

returnsAPromise().then(value => console.log(value))



const evenCheck = async (number) => {
    let evenNumbers = [];
    for (let i = 1; i <= number; i++) {
      if (i % 2 == 0) {
        evenNumbers = [...evenNumbers, i];
      }
    }
    return evenNumbers;
  }
  evenCheck(10).then(value => console.log(value))


  async function evenNumberArray(number){
    let evenNumbers = [];
    for (let i = 1; i <= number; i++) {
      if (i % 2 == 0) {
        evenNumbers = [...evenNumbers, i];
      }
    }
    return evenNumbers;
  }

  (async function (){
    const evenNumbers = await evenNumberArray(10)
    console.log(evenNumbers)

  })()

