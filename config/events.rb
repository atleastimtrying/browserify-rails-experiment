WebsocketRails::EventMap.describe do
  namespace :results do
    subscribe :create, :to => ResultsSocketsController, :with_method => :create
  end
end
