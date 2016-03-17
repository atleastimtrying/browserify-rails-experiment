require 'rails_helper'

RSpec.describe ResultsController do
  describe "GET index" do
    it "assigns @results" do
      result = create :result
      get :index
      expect(assigns(:results)).to eq([result])
    end
  end
end
