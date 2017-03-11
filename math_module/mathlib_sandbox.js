module.exports = function (){
  return {
    add: function(num1, num2) {
      add_sum = num1 + num2
      return add_sum
    },
    multiply: function(num1, num2) {
      multiply_sum = num1 * num2;
      return multiply_sum
    },
    square: function(num) {
      numSquared = num*num;
      return numSquared;
    },
    random: function(num1, num2) {
      x = Math.floor((Math.random() * num2) + num1);
      return x
    }
  }
};
/***************************************************
            SIMPLE ADD FUNCTION
****************************************************/
function add(num1, num2) {
  add_sum = num1 + num2
  return add_sum
}
 add(5,5);
 console.log(add_sum);
/***************************************************
            'EXTENDED' ADD FUNCTION
****************************************************/
function add_long(num1, num2) {
  console.log(`Value of num1 is: ${num1}`);
  console.log(`Value of num2 is: ${num2}`);
  add_long_sum = `This is the product of ${num1} + ${num2} = ${num1 + num2}`;
  return add_long_sum;
}
/***************************************************
            END ADD LONG FUNCTION CODE
****************************************************/

add_long_example = add_long(50,50);
console.log(add_long_example);
console.log("**************************************************");
console.log(add_long(100,100));

/***************************************************
          END ADD EXAMPLE FUNCTION CALLS
****************************************************/



/***************************************************
            MULTIPLY FUNCTION
****************************************************/
function multiply(num1, num2) {
  multiply_sum = num1 * num2;
  return multiply_sum
}

mx_result = multiply(5,5);
console.log(mx_result);
console.log(multiply(10,10));

/***************************************************
            END MULTIPLY
****************************************************/

function square(num) {
  numSquared = num*num;
  return numSquared;
}

console.log(square(100));
newSquare = square(500);
console.log(`This is the product of 500 x 500: ${newSquare}`);
// console.log(`This is the product of 10 x 10: ${square(10)}`;




// function randomBetween(num1, num2) {
//   spread = num2 - num1 // num1 = (10) num2 = (100) == spread is (90)
//   random_between =
// }













//
