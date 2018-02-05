exports.run = (client, message, args) => { 
     message.channel.send({embed: {
      color: 3447003,
      fields: [{
          name: ":ping_pong: Pong!\n",
          value: `${Math.round(client.ping)}ms`
      }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
      }
    }
    });
}
