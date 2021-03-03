//for .map be sure to attach the result to a new variable
// If you call the name of a function that’s been declared already, but don’t include the parentheses, it just returns the definition of the function instead of calling it. But if you include the parentheses, it runs it as a function.

//reduce is going to accumulate when you have a true statement 
//Code Snapshot extension 

//arrow functions - more than one argument use (), more than one operation use {}. Wooowwww


// function total(arr) {
//  const sum = (currentIndex, nextIndex) => currentIndex + nextIndex;   
//  return arr.reduce(sum)   
// //  }
// //  console.log(total([1,2,3]));

// // function doubleNumbers(arr){
// //     return arr.map(num => num * 2)
// //   }
  
// //   console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// //   function stringItUp(arr){
// //     return arr.map(num => num.toString());
// //   }
  
// //   console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// // function capitalizeNames(arr){
// //     // your code here
// //   }
  
// //   console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

// //create a Parent Class Animal and extend to the child classes Frog, Snake, and Lizard

// //add a function on each object that will console a message out about the child
// //use super to do whatever super does?? 

// class Animal{
//     constructor(name, diet, domesticated, numLegs, habitat) {
//         this.name = name;
//         this.diet = diet; 
//         this.domesticated = domesticated; 
//         this.numLegs = numLegs;
//         this.habitat = habitat;
//     }
// }



// class Frog extends Animal{
//     constructor(tongueLength, eyeSize ){
//         super(tongueLength,eyeSize);
//         this.tongueLength = tongueLength; 
//         this.eyeSize = eyeSize;
//     }   

//      ribbit(){
//     return `Ribbit! I don't know why I swallowed a fly`
//     }
    
// }


// class Snake extends Animal{
//     constructor(venomous){
//         super(venomous); 
//         this.venomous = venomous; 
//     }
//     Ssss(){
//         return `Ssss, my name is and I taste like chicken!`
//     }
// }

// class Lizard extends Animal{
//     constructor(camoflauge){
//         super(camoflauge);
//         this.camoflauge = camoflauge;
//       }
//         lizz(){
//         return `I'm a slinky little thing, get it from my Mama `
//     }
// }



// // let kaa = new Snake(); 

// function totalVotes (arr){
//     return arr.reduce((counter, voter) => counter + voter.voted, 0)
// }

// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];
// console.log(totalVotes(voters))

// function shoppingSpree(arr) {
//     // your code here    
//  }
 
//  var wishlist = [
//      { title: "Tesla Model S", price: 90000 },
//      { title: "4 carat diamond ring", price: 45000 },
//      { title: "Fancy hacky Sack", price: 5 },
//      { title: "Gold fidgit spinner", price: 2000 },
//      { title: "A second Tesla Model S", price: 90000 }
//  ];
 
//  console.log(shoppingSpree(wishlist)); // 227005




//  function deleteNum(arr){
//      return function(logic){
//      arr.forEach(if())
//      }

//      }
 
// let numArray = [3, 3, 4, 5, 6, 7, 7, 8 ]


// function callName(){
//     return function() {
//         console.log('Sophia');
//     }
// }

// let f = callName(); 
// f(); 

// function concat(str1){
//     return function(str2){
//      console.log(str1 += str2);
//     }
// }

// let mashUp = concat("PBand"); 
// mashUp("j"); 

// function factorial(num){
// if (num == 1 || num == 0){
//     return 1
// } else {
//     return num * factorial(num - 1)
// }
// }

// console.log(factorial(5));

// function totalVotes(arr) {
//   return  arr.reduce((counter, voter) => counter + voter.voted,0)
//  }
 
//  var voters = [
//      {name:'Bob' , age: 30, voted: true},
//      {name:'Jake' , age: 32, voted: true},
//      {name:'Kate' , age: 25, voted: false},
//      {name:'Sam' , age: 20, voted: false},
//      {name:'Phil' , age: 21, voted: true},
//      {name:'Ed' , age:55, voted:true},
//      {name:'Tami' , age: 54, voted:true},
//      {name: 'Mary', age: 31, voted: false},
//      {name: 'Becky', age: 43, voted: false},
//      {name: 'Joey', age: 41, voted: true},
//      {name: 'Jeff', age: 30, voted: true},
//      {name: 'Zack', age: 19, voted: false}
//  ];
//  console.log(totalVotes(voters)); // 7

//  function totalVotes(arr){ 
//      let counter = 0; 
//      arr.forEach((item)=>{ if(item.voted === true){counter+=1}});
//      return counter
// }    

// function totalVotes(arr){
//     let result = 0; 
//     for(let i = 0; i < arr.length; i++){
//         if (voters[i].voted === true){
//             console.log(voters[i].voted)
//             result +=1
//         }
//     }
//     return result 
// }

//  console.log(totalVotes(voters));


// module.exports = makeRepeater;


// // function addItUp(num1){
// //   return ((num2) =>{
// //     let returnNum = 0; 
// //     for(let i = 0; i < num1; i++){
// //       returnNum + num2
//     }
//   })
// }

// function sort (arr, logic){
//   var box = []; 
//   arr.forEach(item =>{box.push(logic(item))});
//   return box;
// };

// var dogs = [
//   {name: 'bob', fuzzy: true}
//   {name: 'rover', fuzzy: false}
//   {name: 'rosoce', fuzzy: true}
// ]

// function addCalculator(num1){
//   return ((num2) =>{
//   num1 + num2;
  
//   }
//

 function shoppingSpree(arr) {
    return arr.reduce((counter, item) => counter += item.price,0) ; 
 }
 
 var wishlist = [
     { title: "Tesla Model S", price: 90000 },
     { title: "4 carat diamond ring", price: 45000 },
     { title: "Fancy hacky Sack", price: 5 },
     { title: "Gold fidgit spinner", price: 2000 },
     { title: "A second Tesla Model S", price: 90000 }
 ];
 
 console.log(shoppingSpree(wishlist)); // 227005
















































































































































































































































































