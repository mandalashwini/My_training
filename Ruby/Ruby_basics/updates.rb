=beginflag=false
    puts("Enter name")
    @input_data=gets.chomp
    ##validate name
    while flag!=true
      puts("Enter name")
      @input_data=gets.chomp
      if (valid_name)==true
        file.write(@input_data)
        file.write(",")
        flag=true
      else
        flag=false
      end
    end
    flag=false
    while flag!=true
      puts("Enter mobile number")
      @input_data=gets.chomp
      if (valid_mb)==true
        file.write(@input_data)
        file.write(",")
        flag=true
      else
        flag=false
      end
    end

    file.close
end





  def self.valid_name
        if @input_data.class==String && @input_data.length<10
          return true
        else
          return false
        end

  end

  def self.valid_mb
    if @input_data.length==10
      return true
    else
      return false
    end
  =end

end