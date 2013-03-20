<?php
// Largest prime factor
// Problem 3
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

function factors($n) {
  $fs = [];
  while ($n % 2 === 0) {
    array_push($fs, 2);
    $n /= 2;
  }
  if ($n === 1) {
    return $fs;
  }
  $f = 3;
  while ($f * $f <= $n) {
    if ($n % $f == 0) {
      array_push($fs, $f);
      $n /= $f;
    } else {
      $f += 2;
    }
  }
  array_push($fs, $n);
  return $fs;
}

echo max(factors(600851475143));

?>