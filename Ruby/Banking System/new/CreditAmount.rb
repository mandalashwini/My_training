require 'csv'
module CreditAmount
  def self.accountdetails
    puts ("Enter Account Number")
    @accountnumber=gets.chomp
    data = CSV.read("register_data.csv", { encoding: "UTF-8", headers: true, header_converters: :symbol, converters: :all})
    arr_of_hashed_data = data.map { |d| d.to_hash }
    puts arr_of_hashed_data
    flag=0
    arr_of_hashed_data.each_with_index do |element, index|
      puts "Wel"
      cust_hash = element
      if cust_hash[:accountnumber]==@accountnumber.to_i
        puts "Hello"
        puts "Enter amount to credit"
        amount=gets.to_i
        cust_hash[:balance]=amount+cust_hash[:balance]
        arr_of_hashed_data[index]= cust_hash
      end
    end
    CreditAmount.setdata(arr_of_hashed_data)

  end

  def self.setdata(arr_of_hashed_data)
    puts "Hello"
    @file=File.open("register_data.csv","w+")
    @file.write("accountnumber,name,emailid,password,balance\n")
    arr_of_hashed_data.each_with_index do |element, index|
      array_cust=element.values
      str=array_cust.join(",")
      @file.write(str)
      @file.write("\n")
      puts str
    end
    @file.close
    end
end

CreditAmount.accountdetails