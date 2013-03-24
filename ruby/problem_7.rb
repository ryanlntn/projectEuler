# 10001st prime
# Problem 7
# By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

# What is the 10001st prime number?

require 'mathn'

primes = [2]
n = 3

while primes.length < 10002 do
  if n.prime?
    primes.push(n)
  end
  n += 2
end

puts primes[10000]