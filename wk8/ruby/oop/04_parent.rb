class Parent
  def say_hi
    p "hi from Parent"
  end
end

puts Parent.superclass 

class Child < Parent
  def say_hi
    p "hi from Child"
  end

  def send
    p 'send from child...'
  end
end

child = Child.new
child.say_hi

son = Child.new
# son.send :say_hi

lad = Child.new
# lad.send :say_hi #doesnt work cuz overridden Object send method

c = Child.new   
puts c.instance_of? Child
puts c.instance_of? Parent