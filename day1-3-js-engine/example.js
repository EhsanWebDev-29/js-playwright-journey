//Call Stack - LIFO example//

function greet() {
  sayHello();// second into call stack
  console.log("Namaste!");// Prints Namasted! second
}

function sayHello() {
  console.log("Hello!");// Prints Hello! first
}

greet();//First goes into call stack



// Event Loop - example//

console.log("A");// print First

setTimeout(() => {
  console.log("B");
}, 1000);// send this code to envioronment completes and wait into callback queue


console.log("C");//print second

setTimeout(() => {
  console.log("D");
}, 0);// Also sent to envioronment completes and wait in callback queue

console.log("E");// prints third

//D---> prints forth because it has a timer of 0 second.
//B---> prints fifth because it has a timer of 1 second.




// Synchronous code always finishes first//

setTimeout(() => {
  console.log("A");// A will print at the last because it was in the callback queue
}, 0);

for (let i = 1; i <= 5; i++) {
  console.log("B");// Prints all the Bs first
}