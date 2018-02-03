
exports.run = (client, message, args) => { 
    message.channel.send("Invite me to your server: https://discordapp.com/oauth2/authorize?client_id=353117726824464394&scope=bot&permissions=2146959615");
    message.channel.send("In case if you forget the link, I :mailbox: you the link. Check your DMs!");
    message.author.send("Invitation link: https://discordapp.com/oauth2/authorize?client_id=353117726824464394&scope=bot&permissions=2146959615");
    message.author.send("My developers discord server: https://discord.gg/GxCSx4w");
}
