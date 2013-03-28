# Summation of primes
# Problem 10
# The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

# Find the sum of all the primes below two million.

def sieve(limit):
  limitn = limit + 1
  not_prime = [False] * limitn
  primes = []

  for i in range(2, limitn):
    if not_prime[i]:
      continue
    for f in xrange(i * 2, limitn, i):
      not_prime[f] = True

    primes.append(i)

  return primes

print sum(sieve(2000000))