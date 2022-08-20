// What do we know?

// We need to type function, which takes multiple (even unlimited) arguments.
// Function takes always one argument at a time and process.
// After each processing, function moves to the next argument and do the same

// Simple example to understand return type
// const sum = (x: number) => (y: number) => x + y;
// const result1 = sum(1)(2); // Result is 3
// const result2 = sum(1);    // Result is function waiting for y argument
// const result3 = result2(2) // Result is 3 - we need to fulfill expectations of curried function to get a number

// Seems that we need to know:
// 1. If incoming arguments are supported
// 2. What is the frist argument
// 3. If there is next arument
// 4. How to iterate

type Curry = "";
