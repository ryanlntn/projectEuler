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

class Integer
  def proper_divisors
    first_half = (2...self**0.5).to_a.select{ |divisor| self % divisor == 0 }
    second_half = first_half.map{ |divisor| self / divisor }
    first_half.concat(second_half) << 1
  end

  def sum_of_divisors
    self.proper_divisors.reduce(:+)
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

abundant_nums = 1.upto(28123).to_a.select(&:abundant?)

puts abundant_nums.first
puts abundant_nums.length
puts abundant_nums.last