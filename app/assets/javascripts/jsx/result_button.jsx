var React = require('react');
var wrapper = require('modules/websockets_wrapper');

module.exports = React.createClass({
  displayName: 'ResultButton',
  emit_result: function(){
    wrapper.emit('button_clicked');
  },
  render: function(){
    return(<button onClick={this.emit_result}>sample event</button>);
  };
});
