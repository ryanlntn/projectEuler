<?php
// Counting Sundays
// Problem 19
// You are given the following information, but you may prefer to do some research for yourself.

// 1 Jan 1900 was a Monday.
// Thirty days has September,
// April, June and November.
// All the rest have thirty-one,
// Saving February alone,
// Which has twenty-eight, rain or shine.
// And on leap years, twenty-nine.
// A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

$date_arr = array(1,1,1901);
$end_date = "20001231";
$sundays_on_1st = 0;

do {
  $check_date = gmdate('Ymd', gmmktime(0,0,0,$date_arr[1],$date_arr[0]++,$date_arr[2]));
  if (gmdate('d', gmmktime(0,0,0,$date_arr[1],$date_arr[0],$date_arr[2])) == '01' && 
      gmdate('l', gmmktime(0,0,0,$date_arr[1],$date_arr[0],$date_arr[2])) == 'Sunday') {
    $sundays_on_1st += 1;
  }
} while($end_date != $check_date);

echo $sundays_on_1st;

?>