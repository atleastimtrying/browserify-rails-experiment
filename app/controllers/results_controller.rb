class ResultsController < ApplicationController
  def index
    CreateResult.call({label: 'loaded results page', time: Time.now })
    @results = Result.all
    respond_to do |format|
      format.html { }
      format.json { render json: {results: @results} }
    end
  end
end
