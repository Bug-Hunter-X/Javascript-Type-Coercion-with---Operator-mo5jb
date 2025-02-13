# Javascript Type Coercion with + Operator
This repository demonstrates a common Javascript bug related to type coercion with the + operator.  The + operator in Javascript exhibits different behaviors depending on the data types of its operands.  This can lead to unexpected results and subtle bugs if not handled carefully.

## Bug Description
Javascript's loose typing system allows for implicit type coercion. When using the + operator, if one of the operands is a string, the other operand is implicitly converted to a string before concatenation. Similarly, booleans are coerced to 1 (true) or 0 (false) when used with a number.

## Bug Reproduction
Clone the repository and run `bug.js`.
The output will demonstrate unexpected string concatenation and boolean coercion behavior.

## Solution
The `bugSolution.js` file shows ways to mitigate the issue using explicit type checking or using methods which are less prone to these unexpected behaviors.

## Additional Notes
This behavior is not unique to the + operator.  Other operators also display similar type coercion issues.  Best practices include performing explicit type checking to improve code predictability and reduce bugs.