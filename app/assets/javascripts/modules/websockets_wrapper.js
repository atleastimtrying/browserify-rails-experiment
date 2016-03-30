var setup = function(Dispatcher){
  dispatcher = new Dispatcher('localhost:3000/websocket');
};

var bind = function(event, callback){
  dispatcher.bind(event, callback);
};

module.exports = {
  setup: setup,
  bind: bind
};
