var setup = function(Dispatcher){
  dispatcher = new Dispatcher('localhost:3000/websocket');
};

var bind = function(){
  dispatcher.bind();
};

module.exports = {
  setup: setup,
  bind: bind
};
