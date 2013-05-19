# Amicable numbers
# Problem 21
# Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
# If d(a) = b and d(b) = a, where a  b, then a and b are an amicable pair and each of a and b are called amicable numbers.

# For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284.
# The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

# Evaluate the sum of all the amicable numbers under 10000.

def proper_divisors(n)
  first_half = (2...n**0.5).to_a.select{ |divisor| n % divisor == 0 }
  second_half = first_half.map{ |divisor| n / divisor }
  first_half.concat(second_half) << 1
end

def d(n)
  proper_divisors(n).reduce(:+)
end

def all_d_of_n(bound)
  (0...bound).map{ |n| d(n) }
end

def is_amicable?(n, d_of_n)
  d(d_of_n) == n && d_of_n != n
end

def amicable_numbers(bound)
  all_d_of_n(bound).each_with_index.select{ |d_of_n, n| is_amicable?(n, d_of_n) }.flatten.uniq
end

puts amicable_numbers(10000).reduce(&:+)