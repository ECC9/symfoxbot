exports.run = (client, message, args, Discord, RichEmbed) => { 
    message.channel.send({embed: {
      color: 3447003,
      fields: [{
          name: "Symfox's Info\n",
          value: "Version: `1.0.0 beta`\nCreated by `ECC9#6057`, `Gaiben#7736`, `lpz#3218`, `Anarchy#8213`, `[-TM-] TechyMan#0594` and `ViperChan#9895`.\n\nEmail: `galbence2002@gmail.com`"
      }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: `${client.ping} ms`
      }
    }
    });
}