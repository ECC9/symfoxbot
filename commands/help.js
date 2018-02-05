const { RichEmbed } = require("discord.js");
exports.run = async (client, message, args) => { 
  message.channel.send("Check your DMs! You got a DM from me. :mailbox:");
       message.author.send("Here are all of the commands except the secret commands. To request new command(s) send mail to `galbence2002@gmail.com`");
       message.author.send("Want to invite me to your server? Say `;;symfox` then you get the invitation link :D");
       var embed = new RichEmbed()
       .addField("Commands: ( hi )", "```\n ;;symfox \n \n ;;test \n \n ;;staff \n \n ;;invite \n \n ;;afk \n \n ;;back \n \n ;;cookie \n \n ;;what \n \n ;;pancake \n \n ;;lol \n \n ;;um \n \n ;;england \n \n ;;noob \n \n ;;pff \n \n ;;potato \n \n ;;peanut \n \n ;;rekt \n \n ;;hi \n \n ;;thx \n \n ;;yes \n \n ;;ok \n \n ;;no \n \n  More commands coming soon...```")
       .setColor(0xFC142B)
       .setFooter(`${client.ping}ms`)
       .setThumbnail(message.author.displayAvatarURL);
       message.author.send({embed});
       message.author.send("Join our chat: https://discord.gg/GxCSx4w");
}
