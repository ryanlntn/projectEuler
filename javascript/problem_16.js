// Power digit sum
// Problem 16
// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 2^1000?

"use strict";

var num = [2, 9];

function doubleArrayNum(a) {
  for (var i = a.length - 1; i >= 0; i--) {
    if (a[i] * 2 < 10) {
      a[i] *= 2;
    } else {
      a[i - 1] += 1; // problem with carry
      a[i] = a[i] * 2 - 10;
    }
    console.log('loop ' + i);
  }
  return a;
}

console.log(doubleArrayNum(num));