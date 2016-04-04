var tmi = require('tmi.js');
var oath = require('./keys.js');
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
    password: oath
  },
  channels:['g000ey']
};


var client = new tmi.client(options);
client.connect();


//weclome on connect message
client.on('connected', function(address, port) {
  client.color("Firebrick");
  client.action('g000ey', "hi im goooeybot. Welcome to Goooey's channel Kappa Kreygasm");
})

// welcomes user when they say hi
client.on('chat', function(channel, user, message, self) {
  if(message === "hi"){
    client.action('g000ey', "hi " + user.username + " Welcome to Monkey Island!! KappaPride")
  }
});
