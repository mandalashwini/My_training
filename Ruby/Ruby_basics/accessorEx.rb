class AccessorEx
  def set=(data)
    @data=data
  end
  def getdata
   puts @data
  end
  def inspect
    puts "my behavior"
  end
end
a=AccessorEx.new
a.set=10
a.getdata
a.inspect
