// Number letter counts
// Problem 17
// If the numbers 1 to 5 are written out in words: 
// one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) 
// contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" 
// when writing out numbers is in compliance with British usage.

"use strict";

var singles = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

var massiveString = '';

for (var i = 0; i < singles.length; i++) {
  massiveString += singles[i];
  console.log(singles[i]);
}

for (var i = 0; i < teens.length; i++) {
  massiveString += teens[i];
  console.log(teens[i]);
}

for (var i = 0; i < tens.length; i++) {
  massiveString += tens[i];
  console.log(tens[i]);
  for (var j = 0; j < singles.length; j++) {
    massiveString += tens[i] + singles[j];
    console.log(tens[i] + singles[j]);
  }
}

for (var i = 0; i < singles.length; i++) {
  massiveString += singles[i] + 'hundred';
  console.log(singles[i] + 'hundred');
  for (var j = 0; j < singles.length; j++) {
    massiveString += singles[i] + 'hundredand' + singles[j];
    console.log(singles[i] + 'hundredand' + singles[j]);
  }
  for (var k = 0; k < teens.length; k++) {
    massiveString += singles[i] + 'hundredand' + teens[k];
    console.log(singles[i] + 'hundredand' + teens[k]);
  }
  for (var l = 0; l < tens.length; l++) {
    massiveString += singles[i] + 'hundredand' + tens[l];
    console.log(singles[i] + 'hundredand' + tens[l]);
    for (var m = 0; m < singles.length; m++) {
      massiveString += singles[i] + 'hundredand' + tens[l] + singles[m];
      console.log(singles[i] + 'hundredand' + tens[l] + singles[m]);
    }
  }
}

massiveString += 'onethousand';

console.log(massiveString);

var answer = massiveString.length;