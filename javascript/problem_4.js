// Largest palindrome product
// Problem 4
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

"use strict";

var i;
var j;
var largest = 0;

for (i = 999; i > 0; i--) {
  for (j = 999; i > 0; j--) {
    if (i * j == (i * j).toString().split('').reverse().join('')) {
      if (i * j > largest) {
        largest = i * j;
      }
      break;
    }
  }
}

var answer = largest;