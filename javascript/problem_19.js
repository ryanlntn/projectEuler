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

"use strict";

var start_date = new Date(1901, 0, 1);
var end_date = new Date(2000, 11, 31);
var sundays_on_1st = 0;

for (var date = start_date; date <= end_date; date.setDate(date.getDate() + 1)) {
  if (date.getDate() === 1 && date.getDay() === 0)
    sundays_on_1st++;
}

var answer = sundays_on_1st;