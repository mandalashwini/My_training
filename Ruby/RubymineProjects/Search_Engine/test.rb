require 'google_custom_search_api'
require 'whois'
require 'whois-parser'
require 'logger'



whois = Whois::Client.new
r=whois.lookup("google.com")

puts r
parser=r.parser

print "\n************",parser.created_on,"\n"



log = Logger.new('a.txt')
log.info 'Some information'
log.debug 'Debugging hints'
log.error StandardError.new('Something went wrong')