class SendEx
  attr_accessor :id, :name, :per, :address
  def set(values)
    values.each_key  do |k|
      puts self.send("#{k}=",values[k])
       #puts values[k]
    end
  end

 #puts "#{:id}"
end


info= {
      :id=>"12",
      :name=>"ABC",
      :per=>"90",
      :address=>"solapur"
      }



se=SendEx.new
se.set(info)
#puts se.inspect
puts "id="+se.id
puts "name="+se.name
puts "per="+se.per
puts "address="+se.address