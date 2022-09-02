class GoodDog
  @@number_of_dogs = 0 #class variables

  def initialize
    @@number_of_dogs += 1
  end

  def self.total_number_of_dogs
    @@number_of_dogs
  end
end

# puts GoodDog.total_number_of_dogs # => 0

# dog1 = GoodDog.new
# dog2 = GoodDog.new

# puts GoodDog.total_number_of_dogs # => 2

class Person 
  def initialize(age)
    @age = age
  end

  def older?(other_person)
    age > other_person.age
  end

  protected
  
  attr_reader :age  
end

malory = Person.new(64)
sterling = Person.new(42)

puts malory.older?(sterling) # => true 
puts sterling.older?(malory) #  => false

# malory.age  