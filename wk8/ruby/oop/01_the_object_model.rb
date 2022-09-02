#  creating an object class and module 

module Run
  def run
    puts "running!"
  end
end

class HumanBeing
  include Run
end

bob = HumanBeing.new  
bob.run
