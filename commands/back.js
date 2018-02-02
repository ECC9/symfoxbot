exports.run = (client, message, args) => { 
  message.channel.send(`Welcome back, ${message.author}! We missed you! :smile:`);
  message.member.removeRole("353620798197727234");
}