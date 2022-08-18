# Content of this document

- Formal definition of the assignment
- Definition of the final function
- A test example
- Bonus

---

## Formal definition

Declare a function that accepts a function with zero to multiple arguments and converts it into a sequence of functions where each take a single argument. You don't have to implement it, but you have to correctly type it with a function declaration type. The returned function may accept at least one argument. When all the arguments are provided, it should yield the return type of the original function correctly.

## Definition of the final function

`declare function DynamicParamsCurrying<F>(fn: F): Curry<F>`

## A test example

<pre><code>
const ternarySum = (a: number, b: number, c: number) => a + b + c

const c = DynamicParamsCurrying(ternarySum);

// After applying our DynamicParamsCurrying function to ternary function above, the following is equivalent: 
const x = c(1)(2)(3); // x: number
const y = c(1, 2)(3); // y: number
const z = c(1, 2, 3); // z: number
</code></pre>

## Bonus

1. declare variadic and fixed arity variations (like CurryN and CurryV)
2. Avoid “death by a thousand overloads” problem
3. Less code = better
4. Use TypeScript 4+ features
5. Describe to your mum what the monad is.
