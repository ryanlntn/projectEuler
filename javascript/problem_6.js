// Sum square difference
// Problem 6
// The sum of the squares of the first ten natural numbers is,

// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025  385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

"use strict";

var sumOfSquares = function(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += Math.pow(numbers[i], 2);
  }
  return sum;
}

var squareOfSum = function(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += Number(numbers[i]);
  }
  return Math.pow(sum, 2);
}

var numbers = [];

for (var i = 1; i <= 100; i++) {
  numbers.push(i);
}

var answer = squareOfSum(numbers) - sumOfSquares(numbers);