print "Give me a number: "
number = gets.chomp.to_f

bigger = number * 100
puts "A bigger number is #{bigger}"

print "Give me another number: "
another = gets.chomp
number = another.to_i

smaller = number/100
puts "A smaller number is #{smaller}"

print "Give me cash: "
number = gets.chomp.to_f
change = number.to_f * 0.10

puts "Change would be: #{change} "