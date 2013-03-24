<?php
// Sum square difference
// Problem 6
// The sum of the squares of the first ten natural numbers is,

// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025  385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function sumOfSquares($numbers) {
  $sum = 0;
  for ($i = 0; $i < count($numbers); $i++) {
    $sum += pow($numbers[$i], 2);
  }
  return $sum;
}

function squareOfSum($numbers) {
  $sum = 0;
  for ($i = 0; $i < count($numbers); $i++) {
    $sum += $numbers[$i];
  }
  return pow($sum, 2);
}

$numbers = [];

for ($i = 1; $i <= 100; $i++) {
  array_push($numbers, $i);
}

$answer = squareOfSum($numbers) - sumOfSquares($numbers);

echo $answer;

?>