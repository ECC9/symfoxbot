const { RichEmbed } = require("discord.js");
exports.run = async (client, message, args) => { 
  message.channel.send("Check your DMs! You got a DM from me. :mailbox:");
       message.author.send("Here are all of the commands except the secret commands. To request new command(s) send mail to `galbence2002@gmail.com`");
       message.author.send("Want to invite me to your server? Say `;;symfox` then you get the invitation link :D");
       var embed = new RichEmbed()
       .addField("Commands: (b_command is for talking to the bot, m_command is for memes)", "```\n ;;symfox \n \n ;;test \n \n ;;staff \n \n ;;invite \n \n ;;afk \n \n ;;back \n \n ;;m_cookie \n \n ;;m_what \n \n ;;m_pancake \n \n ;;lol \n \n ;;m_um \n \n ;;m_england \n \n ;;m_noob \n \n ;;m_pff \n \n ;;m_potato \n \n ;;m_peanut \n \n ;;m_rekt \n \n ;;b_hi \n \n ;;b_thx \n \n ;;b_yes \n \n ;;b_ok \n \n ;;b_no \n \n  More commands coming soon...```")
       .setColor(0xFC142B)
       .setFooter(`${client.ping}ms`)
       .setThumbnail(message.author.displayAvatarURL);
       message.author.send({embed});
       message.author.send("Join our chat: https://discord.gg/GxCSx4w");
}
