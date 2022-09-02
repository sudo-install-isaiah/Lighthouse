class Vehicle 
  @@NUMBER_OF_VEHICLES = 0

  def initialize(year)
    @year = year
    @@NUMBER_OF_VEHICLES += 1
  end
  
  def age
    puts "age of car is #{years_old} old "
  end

  def self.number_of_vehicles
    @@NUMBER_OF_VEHICLES
  end
  
  def self.gas_mileage(litres, km)
    puts "#{km/litres} km per L!"
  end

  private
  def years_old
    Time.now.year - @year
  end
  
end

module Towable
  def towable
    puts "i can tow stuff!"   
  end
end

class MyCar < Vehicle
  NUMBER_OF_DOORS = 4
end

class MyTruck < Vehicle
  NUMBER_OF_DOORS = 2
  include Towable
end

brz = MyCar.new(2000)
# brz.number_of_vehicles  
puts Vehicle.number_of_vehicles
Vehicle.gas_mileage(2, 40)



ford = MyTruck.new(2000)
# ford.towable
# puts MyTruck.ancestors
# puts MyCar.ancestors
# puts Vehicle.ancestors
ford.age