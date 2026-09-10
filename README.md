# JS-Playwright-Journey
Learning JavaScript to master playwright.



## Day-1 JS-Engine

### Compiled language
- First translate the whole source code into machine language then execute the code(Fast).

### Interpreted language
- Translate and execute the code line by line.

### JIT(Just-In-Time)
- Translate and execute the code line by line but comes with the **TurboFan** feature which compiles the **hot code**(code which is used frequently), so that the **hot code** doesn't have to translate each time.

### Mechanism of Javascript
- **Parser** transform the source code into **AST**(Abstract Syntax Tree).
- **Ignition** translate & execute the **AST** into machine code.
- **TurboFan** Compiles(turns the code into machine code) the **hot code** early.

### Web APIs/ Node APIs
- This is a **Environment** which provides certain features to Javascript. (setTimeout, fetch, file reading **fs**)

### Call Stack 
- Execute one funtion at a time.
- Follows **LIFO**(Last in first out).

### Callback Queue
- Javascript sends the **Asynchronous code** to the envioronment to execute and **Wait** there, when the **Synchronous code** completed then the code which is first in the callback queue comes into call stack and execute first.

# Event Loop
- It continuously check the call stack is empty or not, If it is empty then it takes the function from **callback queue** and send it to **call stack**.



## Day-4 Variables

### var
- Redeclaration(same name again) allowed.
- Reassign(value change) allowed.
- Functional scope(important).
- Hoisted but gives undefined before execution that's why it is not advised to use var because it causes bug.

### let
- Redeclaration not allowed.
- Reassign allowed.
- Block scope.
- Hoisted but resides in TDZ untill execution.

### const
- Redeclaration not allowed.
- Reassign not allowed.
- Block scope
- Hoisted but resides in TDZ untill execution.

### Note
- Js first scan all the variable and function first, this is known as hoisting after that it executed the code line by line.



## Day-5 Functions

### Function Declaration
- This function has a name.
- It is hoisted and goes to top before execution also the whole function is assigned to the memory.

### Function Expression
- This function is assigned to a variable.
- It is hoisted but it behaves according to its declared variable, if it is declared with **var** then it gives undefined when called before initialization and if it is declared with **let** and **const** then it goes into **TDZ**.

### Arrow Function
- It has two types **Implicit return** - single line expression and **Explicit return** - block body or multiple line function with Arrow function.
- It has not his own **this** it uses outer scope **this**.

### Return Statement
- It is used to return a value from the function if not returned any value then it returns **undefined**.
- No code line will be executed after **return** statement.



## Day-6 Data-Types

### Primitive Data Types
- numbers,strings,boolean,undefined,null,bigInt,symbol
- It is stored by value.


### Non-Primitive Data Types
- Objects, Array, Function
- It is stored by reference(copies memory address).

### Falsy Values
- **0 -** 0, -0, 0n(BigInt zero).
- **"" -** Empty string.
- **null, undefined**.
- **NaN**
- **false**