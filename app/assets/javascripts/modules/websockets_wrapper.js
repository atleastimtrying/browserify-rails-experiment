var dispatcher, channel;

var setup = function(Dispatcher, channel_name){
  dispatcher = new Dispatcher('localhost:3000/websocket');
  channel = dispatcher.subscribe(channel_name);
};

var bind = function(event, callback){
  channel.bind(event, callback);
};

module.exports = {
  setup: setup,
  bind: bind
};
