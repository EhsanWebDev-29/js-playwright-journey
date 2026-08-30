## Compiled language
- First translate the whole source code into machine language then execute the code(Fast).

## Interpreted language
- Translate and execute the code line by line.

## JIT(Just-In-Time)
- Translate and execute the code line by line but comes with the **TurboFan** feature which compiles the **hot code**(code which is used frequently), so that the **hot code** doesn't have to translate each time.

## Mechanism of Javascript
- **Parser** transform the source code into **AST**(Abstract Syntax Tree).
- **Ignition** translate & execute the **AST** into machine code.
- **TurboFan** Compiles(turns the code into machine code) the **hot code** early.

## Web APIs/ Node APIs
- This is a **Envioronment** which provides certain features to Javascript. (setTimeout, fetch, file reading **fs**)

## Call Stack 
- Execute one funtion at a time.
- Follows **LIFO**(Last in first out).

## Callback Queue
- Javascript sends the **Asynchronous code** to the envioronment to execute and **Wait** their, when the **Synchronous code** completed then the code which is first in the callback queue comes into call stack and execute first.

## Event Loop
- It continuously check the call stack is empty or not, If it is empty then it takes the function from **callback queue** and send it to **call stack**.
