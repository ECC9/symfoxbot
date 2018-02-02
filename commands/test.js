exports.run = (client, message, args) => { 
  message.channel.send('Testing...').then(sent => {
    sent.edit(`Test results: Ok.\nPing: ${sent.createdTimestamp - message.createdTimestamp}ms`);
})
}