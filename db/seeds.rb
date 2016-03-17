
puts 'Loading seeds...'
Dir[File.join Rails.root, 'db', 'seeds', 'all', '*.rb'].each do |file|
  puts "  -> #{File.basename file}"
  require file
end

if Rails.env == 'development'
  puts 'Loading development seeds...'
  Dir[File.join Rails.root, 'db', 'seeds', 'development', '*.rb'].each do |file|
    puts "  -> #{File.basename file}"
    require file
  end
end
