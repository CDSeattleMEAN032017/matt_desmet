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
      x = Math.floor(Math.random() * num2) + num1;
      return x
    }
  }
};
