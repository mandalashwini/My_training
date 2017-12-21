require 'csv'
module AccountDetails
  def self.accountdetails
    data = CSV.read("register_data.csv", { encoding: "UTF-8", headers: true, header_converters: :symbol, converters: :all})
    arr_of_hashed_data = data.map { |d| d.to_hash }
    puts arr_of_hashed_data
    puts "Enter Account Number"
    accountnumber=gets.to_i
    arr_of_hashed_data.each_with_index do |element, index|
      cust_hash = element
      if cust_hash[:accountnumber]==accountnumber
        puts "Enter amount to withdraw"
        amount=gets.to_i
        cust_hash[:balance]=cust_hash[:balance]-amount
        arr_of_hashed_data[index]= cust_hash
        puts "hiii"
      end
    end
    puts arr_of_hashed_data
    AccountDetails.set_account_details
  end
  def self.set_account_details
    puts "Welcome"





  end

end
AccountDetails.accountdetails