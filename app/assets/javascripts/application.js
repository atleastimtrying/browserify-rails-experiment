// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require websocket_rails/main
var request = require('superagent');
var React = require('react');
var ReactDOM = require('react-dom');
var wrapper = require('modules/websockets_wrapper');
var store = require('modules/store');

var App = require('jsx/app.jsx');

var render = function(state){
  ReactDOM.render(<App results={state.results} />, document.getElementById('display'));
};

window.addEventListener('load', function(){
  request.get('/results.json').set('Accept','application/json').end(function(error, response){
    var results = response.body.results;
    store.action('add_results', results);
  });
  wrapper.setup(WebSocketRails, 'results');
  wrapper.bind('result_created', function(result){
    store.action('add_result', result);
  });
  store.subscribe(render);
});
