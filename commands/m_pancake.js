exports.run = (client, message, args) => { 
    message.channel.send("Here are some :pancake: !", {files: [{attachment: 'http://www.seriouseats.com/images/2015/05/20150517-pancake-primary.jpg' }]} );
}
