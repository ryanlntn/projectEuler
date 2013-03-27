# Special Pythagorean triplet
# Problem 9
# A Pythagorean triplet is a set of three natural numbers, a  b  c, for which,

# a2 + b2 = c2
# For example, 32 + 42 = 9 + 16 = 25 = 52.

# There exists exactly one Pythagorean triplet for which a + b + c = 1000.
# Find the product abc.

a_list, b_list, c_list = (1..500).to_a, (1..500).to_a, (1..500).to_a

def special_pythagorean_triplet a_list, b_list, c_list
  a_list.each do |a|
    b_list.each do |b|
      c_list.each do |c|
        return a * b * c if a**2 + b**2 == c**2 && a + b + c == 1000
      end
    end
  end
end

puts special_pythagorean_triplet(a_list, b_list, c_list)