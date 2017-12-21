def func1
  i = 0
  while i<=10
    puts "#{i}"
    sleep(1)
    i = i+1
  end
end
puts "Started At #{Time.now}"
t1 = Thread.new{func1()}
t1.join
=begin
class Test
  p self
  def self.fun
    puts "Hello"
  end
end
=end
