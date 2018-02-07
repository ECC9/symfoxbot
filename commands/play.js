exports.run = (client, message, args) => {
    case "play":
        if (!args[1]) {
            message.channel.sendMessage("Please provide a link of the music.");
            return;
       }
      
       if (!message.member.voiceChannel) {
           message.channel.sendMessage("You must be in a Voice Channel.");
            return;
       }
       
       if(!servers[message.guild.id]) servers[message.guild.id] = {
          queue: [https://youtube.com/]
       };
       var server = servers[message.guild.id];
       
       if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
          play(connection, message);
       });
}
