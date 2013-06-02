# Non-abundant sums
# Problem 23

# A perfect number is a number for which the sum of its proper divisors is
# exactly equal to the number. For example, the sum of the proper divisors
# of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

# A number n is called deficient if the sum of its proper divisors is
# less than n and it is called abundant if this sum exceeds n.

# As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number
# that can be written as the sum of two abundant numbers is 24. By mathematical analysis,
# it can be shown that all integers greater than 28123 can be written as the sum of
# two abundant numbers. However, this upper limit cannot be reduced any further by
# analysis even though it is known that the greatest number that cannot be expressed
# as the sum of two abundant numbers is less than this limit.

# Find the sum of all the positive integers which cannot be written as the sum of
# two abundant numbers.

require 'mathn'

class Integer
  def divisors
    return [1] if self == 1
    primes, powers = self.prime_division.transpose
    exponents = powers.map{|i| (0..i).to_a}
    divisors = exponents.shift.product(*exponents).map do |powers|
      primes.zip(powers).map{|prime, power| prime ** power}.inject(:*)
    end
    divisors.take divisors.length - 1
  end

  def sum_of_divisors
    self.divisors.reduce(:+)
  end

  def abundant?
    self.sum_of_divisors > self
  end

  def perfect?
    self.sum_of_divisors == self
  end

  def deficient?
    self.sum_of_divisors < self
  end
end

abundants = (1..28123).select(&:abundant?)

i = 0
sums = []
abundants.each do |x|
  abundants[i..abundants.length].each do |y|
    sum = x + y
    sums << sum unless sum > 28213
  end
  i += 1
end
sums.uniq!
puts (1..28213).reject { |n| sums.include? n }.reduce(:+)