// Largest prime factor
// Problem 3
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

"use strict";

var factors = function(n) {
  var fs = [];
  while (n % 2 === 0) {
    fs.push(2);
    n /= 2;
  }
  if (n === 1) {
    return fs;
  }
  var f = 3;
  while (f * f <= n) {
    if (n % f == 0) {
      fs.push(f);
      n /= f;
    } else {
      f += 2;
    }
  }
  fs.push(n);
  return fs;
}

var largestPrimeFactor = Math.max.apply(Math,factors(600851475143));

var answer = largestPrimeFactor;