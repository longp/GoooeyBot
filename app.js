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

//banning peeps in the chat
client.on('chat', function(channel, user, message, self) {
  var usernameInMessage = message.slice(4,message.length);
  var banInMessage = message.slice(0,3);
  console.log(usernameInMessage);
  console.log(banInMessage);
  if(user.username === 'g000ey' && usernameInMessage !== '' ){
      client.ban('g000ey', usernameInMessage);
      console.log('banned' + usernameInMessage);
      client.action('g000ey', usernameInMessage  + ' has been banned GG Kappa');
    }
});
