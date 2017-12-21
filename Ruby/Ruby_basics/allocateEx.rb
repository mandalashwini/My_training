Demo=Class.new do
  def initialize(arg)
    @initialize=true
    puts @initialize
  end
  def initialize?
    @initialize=false
    puts @initialize
  end
end
Demo.allocate.initialize?

class A
  def self.inherited(subclass)
      puts "#{subclass}"
  end

end

class B <A;

end
puts B.superclass