// Power digit sum
// Problem 16
// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 2^1000?

"use strict";

var num = [2];

function doubleArrayNum(a) {
  a.unshift(0);
  var carry = 0;
  for (var i = a.length - 1; i >= 0; i--) {
    if (a[i] * 2 < 10) {
      a[i] = a[i] * 2 + carry;
      carry = 0;
    } else {
      a[i] = a[i] * 2 - 10 + carry;
      carry = 1;
    }
  }
  if (a[0] === 0) {
    a.splice(0, 1);
  }
  return a;
}

for (var i = 1; i < 1000; i++) {
  num = doubleArrayNum(num);
}

var sum = 0;

for (var i = 0; i < num.length; i++) {
  sum = sum + num[i];
}

var answer = sum;