## var
- Redeclaration(same name again) allowed.
- Reassign(value change) allowed.
- Functional scope(important).
- Hoisted but gives undefined before execution that's why it is not advised to use var because it causes bug.

## let
- Redeclaration not allowed.
- Reassign allowed.
- Block scope.
- Hoisted but resides in TDZ untill execution.

## const
- Redeclaration not allowed.
- Reassign not allowed.
- Block scope
- Hoisted but resides in TDZ untill execution.

## Note
- Js first scan all the variable and function first, this is known as hoisting after that it executed the code line by line.