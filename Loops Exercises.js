// / Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// // between 1 and 5 (inclusive).


// // Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// // between 1 and 5 (inclusive).
// let i = 1;
// do {
// 	console.log(i);
// 	i++; 

// }
// while (i <= 5);
// // // Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// // // between 1 and 5 (inclusive).
// // 
// // for (let i = 1; i <= 5; i++){
// // 	console.log(i);
// // }  
// // Exercise 4. Now we want a loop that prints the integers
// // counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// // writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.

// // for (let i = 10; i >= 1; i-- ){
// // 	console.log(i);
// //  }

// //  let i = 11;
// //  do {
// // 	  i--;
// // 		console.log(i);
// //  }
// //  while (i >= 2);

// // let i = 11;
// // while (i >= 2){
// // 	i--;
// // 	console.log(i);
// // }
// // Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// // loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
// let i = 6;
// while (i > 5 && i < 27 ){
// 	i++;
// 	console.log(i);
// }

// let i = 6; 
// do{
// 	i++;
// 	console.log(i);
// }
// while (i > 5 && i <27);

// for(let i = 7; i >= 7 && i <= 27; i++){
// console.log(i);
// }

// // Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// // I.e. it will print 10, then 20, then 30, etc.
// // Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
// let i = 0 
// while (i <= 90 ){
// 	i += 10;
// 	console.log(i);
// }

// let i = 0; 
// do {
// 	i += 10;
// 	console.log(i);
// }
// while (i <= 90);

// for (let i = 10; i <= 100; i += 10){
// 	console.log(i);
// }
// // Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// // run without ever stopping). Then fix the loop so that it stops when
// // counterFour is equal to -100.
//The variable counterFour's value is set at "1". Since the conditional inside the while loop (counterFour < 2 ) will always evaluate to true at counterFour's current value, this loop is considered infinite and will run perpetually. Additionally, this while loop was created with a decrement of -1 every time the loop runs - this ensures further that the 'while" conditional remains true. 
// let counterFour = 1;
// while (counterFour >= -100) {
//   console.log("HELP ME!");
//   counterFour--;
// }

// // Exercise 8. Make a variable that contains your favorite integer. Write a loop
// // (your choice which type) that prints the integers from 0 to that number.
// let gloUp = 30
// for (let i = 0; i <= gloUp; i++){
// 	console.log(i);
// }
// // Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// // less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// // Next to each number it should print "not my favorite number". But next to your favorite
// // number it should print "my favorite number!". Example output (if your favorite number was 2):
// // 0 not my favorite number
// // 1 not my favorite number
// // 2 my favorite number!
// // 3 not my favorite number
// // ...
// // (Hint - use an if statement in your loop)
// let gloUp = 30
// for (let i = 0; i <= 100; i++){
// 	if(i !== gloUp){
// 		console.log(i + " is not my favorite number!");
// 	} else {
// 		console.log(i + " is my favorite number!");
// 	}
// }
// // // Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// // // But in real life, how would you decide which type of loop to use? You might not have an
// // exact answer, but spend a few minutes thinking about the different types of loops and/or
// // doing some research and write down your thoughts in a comment below:
// // While loops are the simplest of loops and allow a certain specified line of code to be executed while a given condition evaluates to "true". It's also very easy to create an infinite loop using the while loop format. If you want to execute a certain block of code at least one time, regardless of condtion - the do/while loop will serve you best. For loops, are the most elegant in my opinion and allow you to iterate ot traverse over an object or array.

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/
console.log('*');
for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
  console.log("counting down from " + outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter >= 1; insideCounter--) {
    console.log("inside " + insideCounter);
	}
	console.log('*********************************')
}
	console.log('*');
// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//This was fairly easy! I got caught up on the nested loop - but figured it out. I referenced W3 schools and freeCodeCamp in passing for help understanding the difference between for, do/while and while loops. 

// Email your file to us or commit your file to GitHub and email us a link.
// © 2020 GitHub, Inc.
// Terms
// Privacy
// Security