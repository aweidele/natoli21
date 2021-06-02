require 'uglifier'

Dir.foreach('.') do |item|
  next if item == '.' or item == '..' or not item.end_with? '.js' 
  output = item[0..-3] + "min.js"
  puts "Creating " + output
  File.open(File.join('..', output), 'w') { |file| file.write(Uglifier.compile(File.read(item))); file.close() }
end