/*Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E */

console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);
console.log(Math.SQRT1_2);

console.log(Math.round(5.9));
console.log(Math.round(5.5));
console.log(Math.round(5.4));
console.log(Math.round(5.6));

//Math.ceil(x) returns the value of x rounded up to its nearest integer:
console.log(Math.ceil(4.9));
console.log(Math.ceil(4.7));
console.log(Math.ceil(4.4));
console.log(Math.ceil(4.2));
console.log(Math.ceil(-4.2));

//Math.floor(x) returns the value of x rounded down to its nearest integer:
console.log(Math.floor(4.9));
console.log(Math.floor(4.7));
console.log(Math.floor(4.4));
console.log(Math.floor(4.2));
console.log(Math.floor(-4.2));

//Math.trunc(x) returns the integer part of x:
console.log(Math.trunc(4.9));
console.log(Math.trunc(4.7));
console.log(Math.trunc(4.4));
console.log(Math.trunc(4.2));
console.log(Math.trunc(-4.2));
console.log(Math.trunc(0.2));

//Math.sign(x) returns if x is negative, null or positive:
console.log(Math.sign(-4));
console.log(Math.sign(0));
console.log(Math.sign(4));