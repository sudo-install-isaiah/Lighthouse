first, second, third = ARGV

puts "Your firest variable is: #{first}"
puts "Your sedcond variable is: #{second}"
puts "Your third variable is: #{third}"

print "Type anything: "
result = $stdin.gets.chomp

puts  "result is #{result}"