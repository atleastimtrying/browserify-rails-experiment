class ResultsController < ApplicationController
  def index
    @results = Result.all
    respond_to do |format|
      format.html { }
      format.json { render json: {results: @results} }
    end
  end
end
