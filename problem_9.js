// Special Pythagorean triplet
// Problem 9
// A Pythagorean triplet is a set of three natural numbers, a  b  c, for which,

// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

"use strict";

var a;
var b;
var c;

for (a = 1; a < 1000; a++) {
  for (b = 1; b < 1000; b++) {
    for (c = 1; c < 1000; c++) {
      if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) && a + b + c === 1000) {
        var answer = a * b * c;
      }
    }
  }
}