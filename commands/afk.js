exports.run = (client, message, args) => { 
  message.channel.send(`${message.author} , I set you AFK.`);
  message.member.addRole("role_id");
}
