class Demo
  @@objCnt=0
  def initialize(val)
    @@objCnt=@@objCnt+1
  end
  def dis
    @@objCnt
  end
end

a=Demo.new(10)
puts a.inspect
a.dis

b=Demo.new(20)
puts p b
b.dis


class Sample
  attr_accessor :condition
  def dis

  end

end