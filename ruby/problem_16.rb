# Power digit sum
# Problem 16
# 215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

# What is the sum of the digits of the number 21000?

num = 2**1000
total = 0

num.to_s.each_char { |n| total += n.to_i }

puts total