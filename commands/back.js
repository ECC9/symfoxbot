exports.run = (client, message, args) => { 
  message.channel.send(`Welcome back, I removed your AFK, ${message.author}.`);
  message.member.removeRole("role_id");
}
