require_relative 'moduleEx'
class Second
  #include  First
  puts First.dis

end

##############################

while i<5 do
  @input_data=gets.chomp
  case i

    when 0
      if(valid_name())
        file.write(@input_data)
        flag=true
      else
        puts("name length is max")
        flag=false;
      end
    when 1
      valid_mb()
    when 2
      valid email()
    when 3
      valid_pass()
    when 4
      valid_confpass()
  end
  if(i+1!=5)
    file.write(@input_data<<",")
  else
    file.write(@input_data)
  end
  i=i+1
end
file.write("\n")
file.close
end
