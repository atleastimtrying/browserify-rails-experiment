require 'rails_helper'

describe 'Visiting the results page', javascript: true do
  it 'has a set fo results visible' do
    create(:result)
    visit results_path
    expect(page).to have_selector ".results .result"
  end
end

