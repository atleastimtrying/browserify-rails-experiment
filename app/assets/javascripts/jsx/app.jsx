var React = require('react');
module.exports = React.createClass({
  displayName: 'App',

  render_results: function(){
    return(
      this.props.results.map(function(result, index){
        return(
          <div className="result" key={index}>
            <p className="label">{result.label}</p>
            <p className="time">{result.time}</p>
          </div>
        );
      })
    );
  },

  render: function(){
    return(
      <div className="results">
        {this.render_results()}
      </div>
    );
  }
});
