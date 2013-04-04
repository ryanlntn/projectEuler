<?php
// Power digit sum
// Problem 16
// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 2^1000?

$num = [2];

function doubleArrayNum($a) {
  array_unshift($a, 0);
  $carry = 0;
  for ($i = count($a) - 1; $i >= 0; $i--) {
    if ($a[$i] * 2 < 10) {
      $a[$i] = $a[$i] * 2 + $carry;
      $carry = 0;
    } else {
      $a[$i] = $a[$i] * 2 - 10 + $carry;
      $carry = 1;
    }
  }
  if ($a[0] === 0) {
    array_splice($a, 0, 1);
  }
  return $a;
}

for ($i = 1; $i < 1000; $i++) {
  $num = doubleArrayNum($num);
}

$sum = 0;

for ($i = 0; $i < count($num); $i++) {
  $sum = $sum + $num[$i];
}

echo $sum;

?>