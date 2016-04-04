var tmi = require('tmi.js');
var oath = require('keys.js');
var options = {
  options : {
    debug:true
  },
  connection:{
    cluster:'aws',
    reconnect:true
  },
  identity: {
    username: 'goooeybot',
    password: 'oath'
  },
  channels:['g000ey']
};
