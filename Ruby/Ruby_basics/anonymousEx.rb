demo=Class.new do
  def dis1
    puts "hello"
  end
  def dis2
    puts "byee.."
  end
end
d=demo.new
d.dis1
d.dis2

data = CSV.read("register_data.csv", { encoding: "UTF-8", headers: true, header_converters: :symbol, converters: :all})
arr_of_hashed_data = data.map { |d| d.to_hash }
puts arr_of_hashed_data.class
flag=0
arr_of_hashed_data.each_with_index do |element, index|
  emp_hash = element
  if emp_hash[:accountnumber]==@accountnumber.to_i
    puts "Hello"
    emp_hash[:balance]=100
    arr_of_hashed_data[index]= emp_hash
    file=File.open("register_data.csv","w+")
    file.write(arr_of_hashed_data)
    file.close
  end
end

##allocate
