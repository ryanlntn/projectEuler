<?php
// Number letter counts
// Problem 17
// If the numbers 1 to 5 are written out in words: 
// one, two, three, four, five, then there are 3 . 3 . 5 . 4 . 4 = 19 letters used in total.

// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) 
// contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" 
// when writing out numbers is in compliance with British usage.

$singles = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
$teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
$tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

$massiveString = '';

// Count through the singles (i.e. 'one'-'nine')
for ($i = 0; $i < count($singles); $i++) {
  $massiveString .= $singles[$i];
  echo $singles[$i];
}

// Count through the 'teens' (i.e. 'ten'-'nineteen')
for ($i = 0; $i < count($teens); $i++) {
  $massiveString .= $teens[$i];
  echo $teens[$i];
}

// Count the rest of the way to 'ninetynine'
for ($i = 0; $i < count($tens); $i++) {
  $massiveString .= $tens[$i];
  echo $tens[$i];
  for ($j = 0; $j < count($singles); $j++) {
    $massiveString .= $tens[$i] . $singles[$j];
    echo $tens[$i] . $singles[$j];
  }
}

// Count the rest of the way to 'ninehundredninetynine'
for ($i = 0; $i < count($singles); $i++) {
  $massiveString .= $singles[$i] . 'hundred';
  echo $singles[$i] . 'hundred';
  for ($j = 0; $j < count($singles); $j++) {
    $massiveString .= $singles[$i] . 'hundredand' . $singles[$j];
    echo $singles[$i] . 'hundredand' . $singles[$j];
  }
  for ($k = 0; $k < count($teens); $k++) {
    $massiveString .= $singles[$i] . 'hundredand' . $teens[$k];
    echo $singles[$i] . 'hundredand' . $teens[$k];
  }
  for ($l = 0; $l < count($tens); $l++) {
    $massiveString .= $singles[$i] . 'hundredand' . $tens[$l];
    echo $singles[$i] . 'hundredand' . $tens[$l];
    for ($m = 0; $m < count($singles); $m++) {
      $massiveString .= $singles[$i] . 'hundredand' . $tens[$l] . $singles[$m];
      echo $singles[$i] . 'hundredand' . $tens[$l] . $singles[$m];
    }
  }
}

$massiveString .= 'onethousand';

echo $massiveString;
echo "\r\n"; 
echo strlen($massiveString);

?>