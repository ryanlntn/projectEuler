<?php
// Largest palindrome product
// Problem 4
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

$largest = 0;

for ($i = 999; $i > 0; $i--) {
  for ($j = 999; $i > 0; $j--) {
    if ((string)($i * $j) == strrev((string)($i * $j))) {
      if ($i * $j > $largest) {
        $largest = $i * $j;
      }
      break;
    }
  }
}

echo $largest;

?>