require 'mysql'

#my = Mysql.new(hostname, username, password, databasename)
con = Mysql.new('localhost', 'root', 'root', 'ruby')
rs = con.query('select * from student')
rs.each_hash { |h| puts h['name']}
puts "Hello"
con.close
