# 10001st prime
# Problem 7
# By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

# What is the 10001st prime number?

def is_prime(n):
  i = 2
  while i < n ** 0.5 + 1:
    if n % i == 0:
      return False
    i += 1
  return True

primes = [2]
n = 3

while len(primes) < 10002:
  if(is_prime(n)):
    primes.append(n)
  n += 2

print primes[10000]