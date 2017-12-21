require 'date'
s=Array.new
ehash = Hash.new
emp=Array.new
File.open("file.txt") do|file|
    while  line=file.gets
        s=Array.new
        s=line.split(',')
        #puts s
        ehash={"code"=>s[0],"name"=>s[1],"age"=>s[2],"dept"=>s[3],"expe"=>s[4],"join_date"=>s[5].chomp}
          emp.push(ehash)
  end
end
    puts("------------------Employee Details-------------------\n")
    puts("code\tname\tage\t\tdept\texperience\tjoining_date\n")
    i=0
    j=0
    while  i<emp.length do
        emp[i].each_value {|value| print value+"\t\t" }
        puts "\n"
        i=i+1
    end

 #MAX AGE

  i=0
  j=0
  max_age=0
  age_value=0
  flag=0
while  i<emp.length do
  age_value=emp[i].fetch("age")
  if max_age<age_value.to_i
    flag=i
  end
  i=i+1
end
  puts("\n-------employee details having max age----")
  emp[flag].each_value {|value| print value+"\t\t" }

# date
t=Time.now
x=emp[flag].fetch("join_date")
puts("\n")






y=Date.parse(x);
z=y-(2017-04-01).to_i
puts(z)
puts(Date.parse(x))
puts(t.strftime("%Y"))
puts(t.class)
puts(t.strftime("%m"))
puts(t.strftime("%x"))







=begin
data1=Hash.new
temp=Hash.new
#date

puts("\n----- emplyoee details have joined in last 6 months ------")
Time.now- 6.months
temp=arr_of_hashed_data.select{ |data1| Date.parse(data1[:join_date]) > Date.parse("2017-05-17")}
puts("\n")

len=temp.length

for i in (0..len-1)
  temp[i].each do |k,v|
    print ("#{k}=#{v}\t")

  end
  puts("\n")
end


puts("\n----- emplyoee details with experience------")

for i in (0..3)
  arr_of_hashed_data[i].each do |k,v|
    print ("#{k}=#{v}\t")
    if(k.to_s)=="experience"
    exp=v.to_i
      case exp
        when (0..5)
          print("fresher\t")
        when (6..23)
          print("beginner\t")
        when (24..48)
          print("implementer\t")
        when (47..100)
          print("expert\t")
      end
    end
  end
  puts("\n")
end
puts("\n----- emplyoee details according to department ------")
grp_data=hashed_data.group_by{|h| h[:department]}.values
puts(grp_data)
=end


