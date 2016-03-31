require 'rails_helper'

describe 'Visiting the results page', javascript: true do
  it 'has a set of results visible' do
    CreateResult.call({label:'foo', time: Time.now})
    visit results_path
    expect(page).to have_selector ".results .result"
  end

  it 'shows a new result when it is created' do
    visit results_path

    CreateResult.call({label:'foo', time: Time.now})
    expect(page).to have_selector ".results .result"
  end
end

