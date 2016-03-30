var websockets_wrapper = require('modules/websockets_wrapper');

describe('websockets_wrapper', function(){
  var mocked_instance, MockedDispatcher;
  beforeEach(function(){
    mocked_instance = {
      bind: function(event_name, callback){
      }
    };

    spyOn(mocked_instance, 'bind');

    MockedDispatcher = function(){
      return(mocked_instance);
    };
  });

  it('calls bind on the passed in class', function(){
    websockets_wrapper.setup(MockedDispatcher);
    var example_callback = function(){};
    websockets_wrapper.bind('Foo', example_callback);
    expect(mocked_instance.bind).toHaveBeenCalled();
  });
});

