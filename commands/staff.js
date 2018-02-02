const { RichEmbed } = require("discord.js");
module.exports.run = async(bot, message, args) => {
    var embed = new RichEmbed()
    .addField("Staff Team:", "\n  \n - in developement - \n \n `Owner email: galbence2002@gmail.com`")
    .setColor(0xFC142B)
    .setThumbnail(message.author.displayAvatarURL);
    message.channel.sendEmbed(embed);
}