const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let sum = 0;
	arr.forEach(num => {
    sum += num;
  });
  return sum;
};

const multiply = function(arr) {
  let multiple = 1;
  arr.forEach(num => {
    multiple *= num;
  });
  return multiple;
};

const power = function(num, exp) {
  let starter = 1;
  while (exp > 0) {
    starter *= num;
    exp--;
  }
  return starter;
};

const factorial = function(num) {
  let fact = 1;
	while (num > 0) {
    fact *= num;
    num--;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
