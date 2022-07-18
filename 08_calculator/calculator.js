const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let arraySum = 0;

  for (let i = 0; i < array.length; i++) {
    arraySum += array[i];
  }

  return arraySum;
};

const multiply = function(array) {
  let result = 1;

  for (let i = 0; i < array.length; i++) {
    result = array[i] * result;
  }
  
  return result;
};

const power = function(a, b) {
	let result = 1;

  for (let i = 0; i < b; i++) {
    result = a * result;
  }

  return result;
};

const factorial = function(a) {
	let result = 1;

  for (let i = 1; i < a + 1; i++) {
    result = i * result;
  }

  return result;
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
