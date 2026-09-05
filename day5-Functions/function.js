//Task-1

// Function declaration

function add(a,b) {
    return a+b;
}


// Function Expression

const subtract = function (a,b) {
    return a-b;
}

// Default parameter function

function greet(name= "Student") {
    console.log(`Hello, ${name}`);
    
}

console.log(add(5,4));
console.log(subtract(5,4));
greet();


//Task-2

const subtractArrow = (a,b)=> a-b;//implicit return
