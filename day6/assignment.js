// function show(array) {
//     let count = {};    // {1 : 2, 2 : 3, 3: 2,"Ram" : 2}
//     for (const element of array) {
//       if (count[element]) {
//         count[element] = count[element] + 1;
//       }else{
//         count[element] = 1;
//       }  
//     }
//     // {1 : 2, 2 : 3, 3: 2,"Ram" : 2}
//     let output = [] 
//     /* 
//     [
//         {
//             input : 1,
//             count : 2
//         },
//         {
//             input : 2,
//             count : 3
//         },
//         {
//             input : 3,
//             count : 2
//         },
//          {
//             input : "Ram",
//             count : 2
//         }

//     ]

//     */
//     for(let key in count){
//         const newObj = {
//             input : key,
//             count : count[key]
//         }
//         /*
//         {
//             input : "Ram",
//             count : 2
//         }

//         */
//         output.push(newObj)
//     }
//     return output
// }

// /*

// [{input :1, count : 2}, {input : 2, count : 2},
// {input : 'Sushil', count : 3}]
// */
// console.log(show([1, 2, 3, 3, 'Ram', 1, 2, 2, 'Ram']));


// let fizzBuzz = (n) => {
//     let output= []
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             output.push("FizzBuzz");
//         } else if (i % 3 === 0) {
//             output.push("Fizz");
//         } else if (i % 5 === 0) {
//             output.push("Buzz");
//         } else {
//             output.push(i);
//         }
//     }
//     return output;
// }
// console.log(fizzBuzz(20));

const people = [
    { name: "Alice", age: 21 },
    { name: "Max", age: 20 },
    { name: "Jane", age: 20 },
  ];
  
  /*acc = {
    21 : [{name : "Alice", age : 21}],
    20 :[{name : "Max", age : 20}, {name : "Jane", age : 20}]
    }
    obj = {name : "Jane", age :  20}
    key = 20
    curGroup = [{name : "Max", age : 20}] 

    20 : [{name : "Max", age : 20}, {name : "Jane", age : 20}]
  */

  function groupBy(objectArray, property) {
    return objectArray.reduce((acc, obj) => {
      const key = obj[property];
      const curGroup = acc[key] ?? [];
  
      return { ...acc, [key]: [...curGroup, obj] };
    }, {});
  }
  
  const groupedPeople = groupBy(people, "age");
  console.log("A",groupedPeople);



