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

/* First parameter with validating input
 * Validation input:
 * type testFirst = First<["a", 1, [1], ["a"], number, string, { a: "a" }]>;
 *
 * return never if validation fails
 */

// Any type doesn't allow us to iterate
// type First<T> = T extends any ? T[0] : never;

// Doesn't accept array
// type First<T> = T extends [any] ? T[0] : never;

type First<F> = F extends [any, ...any[]] ? F[0] : never;
type testFirst = First<["a", 1, [1], ["a"], number, string, { a: "a" }]>;

/*
 * Let's start iteration, get the next parameter in row
 * type testNext = Next<["a", 1, [1], ["a"], number, string, { a: "a" }]>
 */

// Doesn't work for some reason :-D
// type Next<F> = F extends (current: any, ...next: infer P) => infer R ? (...next: P) => R : never;

type Next<F extends any[]> = ((...incomingArgs: F) => any) extends (
  current: any,
  ...next: infer P
) => any
  ? P
  : never;

type testNext = Next<["a", 1, [1], ["a"], number, string, { a: "a" }]>;

/*
 * Let's put all together
 * extends any[] doesn't satisfy requirement of DynamicParamsCurrying
 * type Curry<Input extends any[]> = (first: First<Input>) => Curry<Next<Input>>
 */

// declare function DynamicParamsCurrying<F>(fn: F): Curry<F>
