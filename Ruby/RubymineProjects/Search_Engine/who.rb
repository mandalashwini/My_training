require 'whois'
require 'whois-parser'
require 'logger'
#require_relative 'logger'
module Whois_module
  def self.whois_fun(link)
    whois = Whois::Client.new(:timeout =>40)
    #host = URI.parse("cuelogic.com").host.downcase
    r=whois.lookup("cuelogic.com")
puts r.class

    parser=r.parser

    print "\n************",parser.created_on,"\n"

    log = Logger.new('a.log')
    log.info 'Some information'
    log.debug 'Debugging hints'
    log.error StandardError.new('Something went wrong')
    end
end

