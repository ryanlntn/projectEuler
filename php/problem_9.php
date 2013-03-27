<?php
// Special Pythagorean triplet
// Problem 9
// A Pythagorean triplet is a set of three natural numbers, a  b  c, for which,

// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

for ($a = 1; $a < 500; $a++) {
  for ($b = 1; $b < 500; $b++) {
    for ($c = 1; $c < 500; $c++) {
      if (pow($a, 2) + pow($b, 2) == pow($c, 2) && $a + $b + $c == 1000) {
        $answer = $a * $b * $c;
      }
    }
  }
}

echo $answer;

?>