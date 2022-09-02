class Student
  def initialize(name, grade)
    @name = name
    @grade = grade  
  end  

  def better_grade_than?(other_student)
    self.grade > other_student.grade
  end

  protected

  attr_reader :grade

end

steve = Student.new 'steve', 50
joe = Student.new 'joe', 20

# joe.grade 

puts steve.better_grade_than?(joe)



class Person
  
  def use_hi
  hi
  end

  private
  
  def hi
    puts 'hi'
  end
end

bob = Person.new  
bob.use_hi