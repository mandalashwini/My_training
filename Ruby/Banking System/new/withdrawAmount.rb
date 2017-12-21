require 'csv'
module WithdrawAmount
  def self.withdraw
    puts ("Enter Account Number")
    @accountnumber=gets.chomp
    data = CSV.read("register_data.csv", { encoding: "UTF-8", headers: true, header_converters: :symbol, converters: :all})
    arr_of_hashed_data = data.map { |d| d.to_hash }
    puts arr_of_hashed_data.class
    puts arr_of_hashed_data
        arr_of_hashed_data.each_with_index do |element, index|
          cust_hash = element
          if cust_hash[:accountnumber]==@accountnumber.to_i
            puts "Hello"
            puts "Enter amount to withdraw"
            amount=gets.to_i
            if cust_hash[:balance] > amount
            cust_hash[:balance]=cust_hash[:balance]-amount
            arr_of_hashed_data[index]= cust_hash
            else
              puts "low balance"
            end

          end
        end
     puts @arr_of_hashed_data
  end



end

WithdrawAmount.withdraw