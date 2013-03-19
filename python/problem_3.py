# Largest prime factor
# Problem 3
# The prime factors of 13195 are 5, 7, 13 and 29.

# What is the largest prime factor of the number 600851475143 ?

def prime_factors(n):

  factors = []

  while n % 2 == 0:
    factors.append(2)
    n /= 2

  if n == 1:
    return factors

  factor = 3

  while factor * factor <= n:
    if n % factor == 0:
      factors.append(factor)
      n /= factor
    else:
      factor += 2

  factors.append(n)

  return factors


print max(prime_factors(600851475143))