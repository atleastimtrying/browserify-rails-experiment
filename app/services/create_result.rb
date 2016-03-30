class CreateResult
  def self.call(params)
    @result = Result.create(params)
    WebsocketRails[:results].trigger(:result_created, @result)
  end
end 
