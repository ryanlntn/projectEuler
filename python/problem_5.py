# Smallest multiple
# Problem 5
# 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

# What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

def divisible_by(n, divisor):
  return n % divisor == 0

i, n = 20, 20

while i > 1:
  for i in reversed(range(1, 21)):
    if not divisible_by(n, i):
      n += 20
      i = 20

print n