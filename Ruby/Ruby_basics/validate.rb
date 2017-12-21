class Person < ActiveRecord::Base
  validates_presence_of :name
end

Person.create(:name => "John Doe").valid? # => true
Person.create(:name => nil).valid? # => false