<?php
// 10001st prime
// Problem 7
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10001st prime number?

function isPrime($n) {
  $i = 2;
  while ($i < sqrt($n) + 1) {
    if ($n % $i == 0) {
      return false;
    }
    $i++;
  }
  return true;
}

$primes = [2];
$n = 3;

while (count($primes) < 10001) {
  if (isPrime($n)) {
    array_push($primes, $n);
  }
  $n++;
} 

echo $primes[10000];

?>