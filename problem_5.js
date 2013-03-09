// Smallest multiple
// Problem 5
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

"use strict";

var isDivisibleBy = function (n, divisor) {
  return n % divisor == 0;
}

var i = 20;
var n = 20;

while (i) {
  for (i = 20; i >= 1; i--) {
    if (!isDivisibleBy(n, i)) {
      n += 20;
      i = 20;
    }
  }
}

var answer = n;