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
// //make gooeybot BanHammer wielder
// client.mod('g000ey', 'goooeybot');

//checkign whose mods
client.on('chat', function(channel, user, message, self) {
  if(message === '!mods') {
    client.mods('g000ey').then(function(data) {
      console.log(data);
      client.action('g000ey', "Mods are " + data)
    });
  }
});
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
  var usernameInMessage = message.slice(5,message.length);
  var banInMessage = message.slice(0,4);

  if(user.username === 'g000ey' && message.length >= 5 && banInMessage === "!ban" ){
    client.ban('g000ey', usernameInMessage);
    client.action('g000ey', usernameInMessage  + ' has been banned GG KappaPride');
    }
});

//oopsie need to unban peepz
client.on('chat', function(channel, user, message, self) {
  var usernameInMessage = message.slice(7,message.length);
  var banInMessage = message.slice(0,6);

  if(user.username === 'g000ey' && message.length >= 4 && banInMessage === "!unban" ){
    client.unban('g000ey', usernameInMessage);
    client.action('g000ey',"by the grace of his Gooeyness "+ usernameInMessage  + ' has been unbanned GG Kreygasm Kreygasm');
    }
});

//gives kens naopgg rank/stats
client.on('chat', function(channel, user, message, self) {
  if(message === "rank" || message === "stats" || message === "naopgg") {
    client.action("g000ey", " Goooey stats here :D :D : http://na.op.gg/summoner/userName=goooey ");
  }
})
