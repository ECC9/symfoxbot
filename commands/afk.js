exports.run = (client, message, args) => { 
  message.channel.send("I set you AFK!");
  message.member.addRole("role_id");
}
