# Amicable numbers
# Problem 21
# Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
# If d(a) = b and d(b) = a, where a  b, then a and b are an amicable pair and each of a and b are called amicable numbers.

# For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284.
# The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

# Evaluate the sum of all the amicable numbers under 10000.

def proper_divisors(n)
  (1...n).to_a.select { |divisor| n % divisor == 0 }
end

def d(n)
  proper_divisors(n).reduce(&:+)
end

def is_amicable_pair?(n1, n2)
  d(n1) == n2 && d(n2) == n1
end

def amicable_numbers(max)
  (1...max).to_a.combination(2).select { |n1, n2| is_amicable_pair?(n1, n2) }
end

print amicable_numbers(10000)