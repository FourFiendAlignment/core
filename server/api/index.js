var config = require('./config.js');
var opts = {};
var opts.map = require('./map');
var opts.init = require('./init');

pubnub.subscribe({
  channel: 'map, init',
  message: function( message, env, channel ) {
  	opts[channel](message);
  }	
})
