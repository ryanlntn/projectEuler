<?php
// Summation of primes
// Problem 10
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

function sieve($max) {                         // So I looked up prime generation and found out about the Sieve of Eratosthenes.
  $D = []; 
  $primes = [];                    // I'm not yet entirely sure how it works but it generates a list of primes up to
  for ($q=2; $q<$max; $q++) {                 // a given max.
    if ($D[$q]) {
      for ($i=0; $i<count($D[$q]); $i++) {
        $p = $D[$q][$i];
        if ($D[$p+$q]) array_push($D[$p+$q],$p);
        else $D[$p+$q]=[$p];
      }
      unset($D[$q]);
    } else {
      array_push($primes,$q);
      if ($q*$q<$max) $D[$q*$q]=[$q];
    }
  }
  return $primes;
}

$answer = array_sum(sieve(2000000));

echo $answer;

?>