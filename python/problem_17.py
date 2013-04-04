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
for single in singles:
  massive_string += single
  print single

# Count through the 'teens' (i.e. 'ten'-'nineteen')
for teen in teens:
  massive_string += teen
  print teen

# Count the rest of the way to 'ninetynine'
for ten in tens:
  massive_string += ten
  print ten
  for single in singles:
    massive_string += ten + single
    print ten + single

# Count the rest of the way to 'ninehundredninetynine'
for single in singles:
  massive_string += single + 'hundred'
  print single + 'hundred'

  for sing in singles:
    massive_string += single + 'hundredand' + sing
    print single + 'hundredand' + sing
  
  for teen in teens:
    massive_string += single + 'hundredand' + teen
    print single + 'hundredand' + teen
  
  for ten in tens:
    massive_string += single + 'hundredand' + ten
    print single + 'hundredand' + ten
    
    for sing in singles:
      massive_string += single + 'hundredand' + ten + sing
      print single + 'hundredand' + ten + sing

massive_string += 'onethousand'

print massive_string
print len(massive_string)