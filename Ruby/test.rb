=begin
require 'mysql'

#my = Mysql.new(hostname, username, password, databasename)
con = Mysql.new('localhost', 'root', 'password', 'ruby')
rs = con.query('select * from student')
rs.each_hash { |h| puts h['name']}
con.close
=end
=begin
puts "Enter name"
name =gets.chomp
puts "Enter id"
id =gets.chomp.to_i
puts name.class
puts id.class
@str="a"
if name.class==String
  @str=@str+"\'"
  @str=@str+"name"
  @str=@str+"\'"

end
@str=@str+id.to_s
p @str
#Table.getAllRecords

end
=end




class A
  def self.hi
    puts "hi"
  end
end
class B < A
  B.hi
end
