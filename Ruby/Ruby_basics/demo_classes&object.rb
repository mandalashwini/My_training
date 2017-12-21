class Sample
  @@cnt=0
  def initialize(id,name)
    @id=id
    @name=name
  end
  def dis()
    puts(@id)
    puts(@name)
  end
end

obj1=Sample.new(2,"xyz")
#obj1.stud(1,"abc")
obj1.dis
