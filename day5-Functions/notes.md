## Function Declaration
- This function has a name.
- It is hoisted and goes to top before execution also the whole function is assigned to the memory.

## Function Expression
- This function is assigned to a variable.
- It is hoisted but it behaves according to its declared variable, if it is declared with **var** then it gives undefined when called before initialization and if it is declared with **let** and **const** then it goes into **TDZ**.

## Arrow Function
- It has two types **Implicit return** - single line expression and **Explicit return** - block body or multiple line function with Arrow function.
- It has not his own **this** it uses outer scope **this**.

## Return Statement
- It is used to return a value from the function if not returned any value then it returns **undefined**.
- No code line will be executed after **return** statement.