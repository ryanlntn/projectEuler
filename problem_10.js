// Summation of primes
// Problem 10
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

"use strict";

var isPrime = function(n) {
  for (var i = 2; i < (n / 2); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

var primes = [2];
var n = 3;

while (n < 2000000) {
  if (isPrime(n)) {
    primes.push(n);
  }
  n++;
}

var sum = 0;

for (var i = 0; i <= primes.length; i++) {
  sum = sum + primes[i];
}

var answer = sum;