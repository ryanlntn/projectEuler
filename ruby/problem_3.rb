# Largest prime factor
# Problem 3
# The prime factors of 13195 are 5, 7, 13 and 29.

# What is the largest prime factor of the number 600851475143 ?

def prime_factors(n)

  factors = []

  while n % 2 == 0 do
    factors.push(2)
    n /= 2
  end

  if n == 1
    return factors
  end

  factor = 3

  while factor * factor <= n do
    if n % factor == 0
      factors.push(factor)
      n /= factor
    else
      factor += 2
    end
  end

  factors.push(n)

  return factors

end

puts prime_factors(600851475143).max