class ResultsSocketsController < WebsocketRails::BaseController
  def create
    result = Result.new message
    if result.save
      send_message :create_success, result, :namespace => :results
    else
      send_message :create_fail, result, :namespace => :results
    end
  end
end

