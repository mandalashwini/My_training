require_relative 'API'
module View
  def self.view_fun
    puts "Enter Keyword"
    keyword=gets.chomp
    Api_module.api_search_fun(keyword)
  end
end

View.view_fun
