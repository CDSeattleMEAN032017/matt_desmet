var my_math_lib = require('./mathlib'); // require the mathlib module doc
var mathCalc = new my_math_lib(); // set new var to be a new instance of the functin object form mathlib.

// create a function to pass (2) numbers to the calculations below.
function rangeSet(num1, num2) {
  return {a: num1,
          b: num2}
}

// set new var 'range' to equal the result of the function call of rangeSet
var range = (rangeSet(1,10))
console.log(range.a);

// Output of tieing the (2) docs together and running functions.
console.log(`The sum of ${range.a} + ${range.b} is: ${mathCalc.add(range.a,range.b)}`);
console.log(`The product of ${range.a} X ${range.b} is: ${mathCalc.multiply(range.a,range.b)}`);
console.log(`The square of ${range.b} is: ${mathCalc.square(range.b)}`);
console.log(`${mathCalc.random(range.a,range.b)} is a random number between ${range.a} and ${range.b}.`);
