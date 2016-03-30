class ResultsController < ApplicationController
  def index
    CreateResult.call({label: 'loaded results page', time: Time.now })
    @results = Result.all
  end
end
