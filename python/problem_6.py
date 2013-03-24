# Sum square difference
# Problem 6
# The sum of the squares of the first ten natural numbers is,

# 1^2 + 2^2 + ... + 10^2 = 385
# The square of the sum of the first ten natural numbers is,

# (1 + 2 + ... + 10)2 = 552 = 3025
# Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025  385 = 2640.

# Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

def sum_of_squares(numbers):
  return sum([ n ** 2 for n in numbers ])

def square_of_sum(numbers):
  return sum(numbers) ** 2

numbers = range(1, 101)

print square_of_sum(numbers) - sum_of_squares(numbers)