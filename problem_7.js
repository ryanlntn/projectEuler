// 10001st prime
// Problem 7
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

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

while (primes.length < 10002) {
  if (isPrime(n)) {
    primes.push(n);
  }
  n++;
}

var answer = primes[10001];