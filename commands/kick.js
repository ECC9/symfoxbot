exports.run = (client, message, [mention, ...reason]) => {
  const modRole = message.guild.roles.find("name", "Staff");
  if (!modRole)
    return message.channel.send({embed: {
      color: 3447003,
      fields: [{
          name: ":x: Roles? Yes!\n",
          value: `"Staff" role doesn't exist.`
      }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: `${Math.round(client.ping)}ms`
      }
    }
    });

  if (!message.member.roles.has(modRole.id))
    return message.channel.send({embed: {
      color: 3447003,
      fields: [{
          name: ":x: What's now?\n",
          value: `You can't use this command.`
      }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: `${client.ping} ms`
      }
    }
    });

  if (message.mentions.members.size === 0)
    return message.channel.send({embed: {
      color: 3447003,
      fields: [{
          name: ":x: Uh... arguments please?\n",
          value: `You didn't mention an user you want to kick.`
      }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: `${client.ping} ms`
      }
    }
    });

  if (!message.guild.me.hasPermission("KICK_MEMBERS"))
    return message.reply("");

  const kickMember = message.mentions.members.first();

  kickMember.kick(reason.join(" ")).then(member => {
    message.channel.send({embed: {
      color: 3447003,
      fields: [{
          name: ":white_check_mark: YES!\n",
          value: `I kicked the user.`
      }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: `${client.ping} ms`
      }
    }
    });
  });
};
