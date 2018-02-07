exports.run = (client, message, args) => { 
         if ( !args || args.length < 1 ) {
              message.channel.send({embed: {
                color: 3447003,
                fields: [{
                    name: ":question: Question please?\n",
                    value: `\n\nSpecify the question please.`
                }
                ],
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.avatarURL,
                  text: `${client.ping} ms`
                }
              }
              });
            }else{
        const replies = ["It's definitely certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes",
        "You might rely on it",
        "As I see it, yes.",
        "Probably",
        "Looks good",
        "Definitely",
        "I don't think so",
        "Too lazy to think",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "No",
        "Definitely not me",
        "hi",                 
        "Can't read that",                 
        "Very doubtful"];
        message.replytext = Math.floor((Math.random() * replies.length) + 0);
        return message.channel.send(replies[message.replytext]);
}
