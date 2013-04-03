# Lattice paths
# Problem 15
# Starting in the top left corner of a 2 x 2 grid, and only being able to move to the right and down, 
# there are exactly 6 routes to the bottom right corner.

# How many such routes are there through a 20 x 20 grid?

import itertools

def lattice_paths(x, y):
  # Build lattice from dimension arguments
  cols = [ 'R' for i in range(x) ]
  rows = [ 'D' for i in range(y) ]
  lattice = cols + rows
  
  # Return the number of unique permutations
  return len(set(itertools.permutations(lattice)))

print lattice_paths(20, 20)