const { RichEmbed } = require("discord.js");
exports.run = (client, message, args) => { 
    message.channel.send("Check your DMs! I've sent you the secret commands :P");
        message.author.send("Here are all of the secret commands. To request command(s), send email to `galbence2002@gmail.com`");

        var embed = new RichEmbed()
        .addField("Secret Commands:", "```\n ;;rip ( use at your own risk ) \n ;;gay \n \n ;;hahg \n \n More commands coming soon...```")
        .setColor(0xFC142B)
        .setThumbnail(message.author.displayAvatarURL);

        message.author.send({embed});
}
