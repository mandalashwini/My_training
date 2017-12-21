class Multipler

  arr=["get","show","display"]
  arr.each do |a|
  define_method("#{a}" do |*agrs|
      puts args

    end
  end

def get()


obj=Multipler.new


animal=Object.new

def animal.number_of_feet=(feet)
  @number_of_feet=feet
end

def animal.number_of_feet
  @number_of_feet
end


animal.number_of_feet=20
puts animal.number_of_feet

cat=animal.clone
cat.number_of_feet=50
puts cat.number_of_feet

dog=animal.clone
dog.number_of_feet=100
puts dog.number_of_feet
=end
