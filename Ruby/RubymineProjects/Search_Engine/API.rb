require 'google_custom_search_api'
require_relative 'who'
module Api_module
  def self.api_search_fun(keyword)
    results = GoogleCustomSearchApi.search(keyword,page:1)
    Api_module.display_result(results)
  end
    def self.display_result(results)
      results["items"].each do |item|
        puts "Title:-  #{item["title"]}"
        puts "Link:-  #{item["link"]}\n\n"
        Whois_module.whois_fun(item["link"])
      end

    end

end
