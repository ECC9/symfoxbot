exports.run = (message, bot) => {
    if (!message.mentions.users.first()) return message.channel.send("Mention a user or multiple users to ban.")
    let ment = message.mentions.users;
    let text = []
    ment.forEach(m => {

        if (!message.guild.member(m).bannable) {
            message.channel.send("Something went wrong when banning: "+m.username);          
        } else {
            message.guild.ban(message.guild.member(m)).then(() => {
                text.push(m.username)
            }).catch(err => message.channel.send("Something went wrong when banning: "+m.username))
        }
    });
    setTimeout(function() {
        if (text.length === 0) return;
        message.channel.send(text.join(", ")+" has been banned.", {split:true});
        console.log(message.guild.name+" Banned "+text.join(", "))
    }, 1000);
}

exports.conf = {
    userPerm: ["BAN_MEMBERS"],
    botPerm: ["SEND_MESSAGES", "BAN_MEMBERS"],
    coolDown: 0,
    dm: false,
    category: "Moderation",
    help: "Ban a user",
    args: "<@mention>",
}
