class GoodDog
attr_accessor :name, :height, :weight


  def initialize(n, h, w)
    self.name = n
    self.height = h
    self.weight = w
  end

  def speak
    "#{name} says arf!"
  end

  def change_info(n, h, w)
    self.name = n
    self.height = h
    self.weight = w
  end

  def info 
    "#{name} weighs #{weight} and is #{height} tall."
  end

end

# sparky = GoodDog.new('Sparky', '12 inches', '10 lbs')
# puts sparky.info
# puts 
# sparky.change_info('spartacus', '24 inches', '45lbs')
# puts sparky.info

# puts sparky.speak
# puts sparky.name
#sparky.name = "Spartacus"
#puts sparky.name

