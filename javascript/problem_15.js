// Lattice paths
// Problem 15
// Starting in the top left corner of a 2 x 2 grid, and only being able to move to the right and down, 
// there are exactly 6 routes to the bottom right corner.

// How many such routes are there through a 20 x 20 grid?

"use strict";

function factorial(n) {
  if (n == 1) {
    return 1;
  } 
  return n * factorial(n - 1);
}

function lattice_paths(x, y) {
  return factorial(x + y) / (factorial(x) * factorial(y));
}

var answer = lattice_paths(20, 20);