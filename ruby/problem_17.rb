# Number letter counts
# Problem 17
# If the numbers 1 to 5 are written out in words: 
# one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

# If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


# NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) 
# contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" 
# when writing out numbers is in compliance with British usage.

singles = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

massive_string = ''

# Count through the singles (i.e. 'one'-'nine')
singles.each do |single|
  massive_string += single
end

# Count through the 'teens' (i.e. 'ten'-'nineteen')
teens.each do |teen|
  massive_string += teen
end

# Count the rest of the way to 'ninetynine'
tens.each do |ten|
  massive_string += ten
  singles.each do |single|
    massive_string += ten + single
  end
end

# Count the rest of the way to 'ninehundredninetynine'
singles.each do |single|
  massive_string += single + 'hundred'

  singles.each do |sing|
    massive_string += single + 'hundredand' + sing
  end

  teens.each do |teen|
    massive_string += single + 'hundredand' + teen
  end
  
  tens.each do |ten|
    massive_string += single + 'hundredand' + ten
    
    singles.each do |sing|
      massive_string += single + 'hundredand' + ten + sing
    end
  end
end

massive_string += 'onethousand'

puts massive_string
puts massive_string.length