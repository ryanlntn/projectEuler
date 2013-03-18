// Summation of primes
// Problem 10
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

"use strict";

// var isPrime = function(n) {                // This was my original attempt, quite naive.
//   for (var i = 2; i < (n / 2); i++) {      // It was running too long and not returning the correct answer.
//     if (n % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }

// var sum = 2;
// var n = 3;

// while (n < 2000000) {
//   if (isPrime(n)) {
//     sum += n;
//     console.log(n);
//   }
//   n++;
// }

// var answer = sum;

function sieve(max) {                         // So I looked up prime generation and found out about the Sieve of Eratosthenes.
  var D = [], primes = [];                    // I'm not yet entirely sure how it works but it generates a list of primes up to
  for (var q=2; q<max; q++) {                 // a given max.
    if (D[q]) {
      for (var i=0; i<D[q].length; i++) {
        var p = D[q][i];
        if (D[p+q]) D[p+q].push(p);
        else D[p+q]=[p];
      }
      delete D[q];
    } else {
      primes.push(q);
      if (q*q<max) D[q*q]=[q];
    }
  }
  return primes;
}

var answer = sieve(2000000).reduce(function(a, b) { return a + b }); // With this list of primes I was able to find the answer.

// I intend to revisit prime generation and learn more about these algorithms.