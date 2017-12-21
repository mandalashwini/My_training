=begin
class FileEx
  def show
    #my_object = JSON.parse( IO.read("register_data.json", encoding:'utf-8') )
    #puts my_object
    f = File.open("register_data.json", "r")
    f.each_line do |line|
      puts line
    end
    f.close
    puts File.file?("register_data.json")
  end

end

f=FileEx.new
f.show
=end
require 'csv'
all_records = CSV.read('/home/ashwini/MY_TRAINING/Ruby/Banking System/register_data.csv', :headers=>true)
puts all_records





require 'json'
module Registration
  Array_hash_data=Array.new
  $acccount_no=0
  @file=File
  def self.get_info
    puts("Enter Name,Mobile number,email_id,password,confirm password\n")
    $acccount_no=$acccount_no+1
    Array_hash_data[#{$acccount_no}
        Array_hash_data[gets.chomp+","]
    Array_hash_data[gets.chomp+","]
    Array_hash_data[gets.chomp+","]
    Array_hash_data[gets.chomp+","]
    Array_hash_data[gets.chomp]
    puts("Hash data")
    puts Array_hash_data
    file=File.open("register_data.csv","a+")
    file.write(Array_hash_data.to_json)
    file.write("\n")
    file.close
  end
end



Registration.get_info