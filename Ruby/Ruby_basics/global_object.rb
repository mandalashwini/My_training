$cnt=0
class A
  def fun()
    $cnt=$cnt+1
    puts($cnt)
  end
end

class B
  def fun
    $cnt=$cnt+1
    puts($cnt)
  end
end
 a=A.new
a.fun
b=B.new
b.fun

