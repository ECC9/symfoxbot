exports.run = async (client, message, args) => { 
  if(!message.member.roles.some(r=>["Staff"].includes(r.name)) )
  return message.channel.send({embed: {
    color: 3447003,
    fields: [{
        name: ":octagonal_sign: First of all, permissions.\n",
        value: "\n\nYou don't have permissions. You need `Staff` role."
    }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: `${client.ping} ms`
    }

}});

let member = message.mentions.members.first();
if(!member)
  return message.channel.send({embed: {
    color: 3447003,
    fields: [{
        name: ":octagonal_sign: No arguments!\n",
        value: "\n\nYou didn't tag the user you wanted to ban."
    }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: `${client.ping} ms`
    }
  }})
if(!member.bannable) 
  return message.channel.send({embed: {
    color: 3447003,
    fields: [{
        name: ":octagonal_sign: Hey! How about permissions?\n",
        value: "\n\nIt looks like I don't have permissions to ban the user. Why? Maybe he has a higher role than me."
    }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: `${client.ping} ms`
    }
  }})

let reason = args.slice(1).join(' ');
if(!reason)
  return message.channel.send({embed: {
    color: 3447003,
    fields: [{
        name: ":octagonal_sign: Reason please?\n",
        value: "\n\nSpecify the reason for ban."
    }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: `${client.ping} ms`
    }
  }})
await member.ban(reason)
  .catch(error => message.channel.send(`Sorry ${message.author} I couldn't ban because of : ${error}`));
message.channel.send({embed: {
  color: 3447003,
  fields: [{
      name: ":white_check_mark: Good news!\n",
      value: "\n\nI banned the user you wanted. More info in the next message."
  }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: `${client.ping} ms`
  }
}})
message.channel.send(`Banner: ${message.author.tag}\n\nSubject: ${member.user.tag}\n\nReason: ${reason}`);
}
