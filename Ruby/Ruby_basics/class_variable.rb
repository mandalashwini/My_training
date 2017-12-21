###use of self

class Sample1
  def self.show(name)
    puts "this is class method"
    return name
  end
end
s=Sample1.new
 ptr= Sample1.show("ABC")
puts ptr

