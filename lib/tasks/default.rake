
require 'rake-n-bake'

task default: %i[
  bake:check_external_dependencies
  bake:code_quality:all
  bake:rspec
  bake:rails_best_practices
  notes
  bake:ok_rainbow
]
