
require 'rake-n-bake'

task default: %i[
  bake:check_external_dependencies
  bake:code_quality:all
  bake:rspec
  bake:coverage:check_specs
  bake:rails_best_practices
  bake:bundler_audit
  notes
  bake:ok_rainbow
]
