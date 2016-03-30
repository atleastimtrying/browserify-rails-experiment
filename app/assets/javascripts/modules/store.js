var subscribers = [];
var state = {
  results: []
};

var add_result = function(state, result){
  state.results.push(result);
  return state;
};

var add_results = function(state, results){
  state.results = state.results.concat(results);
  return state;
};

module.exports = {
  action: function(action, argument){
    
    switch(action){
      case 'add_result':
        state = add_result(state, argument);
        break;
      case 'add_results':
        state = add_results(state, argument);
        break;
      default:
        //noop
    };

    subscribers.forEach(function(subscriber){
      subscriber(state);
    });
  },
  subscribe: function(callback){
    subscribers.push(callback);
  }
};
