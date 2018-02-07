exports.run = (client, message, args) => { 
  self.registerCommand('me', function (msg, args) {
    // Get user, if any.
    let user = {name: null, avatar: null, id: false}
    if (/user/.test(args[0])) {
      let isUser = this.findMember(msg, args[1])
      if (isUser) {
        user = {name: `${isUser.username}#${isUser.discriminator}`, avatar: isUser.avatarURL, id: isUser.id}
        args.splice(0, 2)
      } else {
        user = {name: `${msg.author.username}#${msg.author.discriminator}`, avatar: msg.author.avatarURL, id: msg.author.id}
        args.splice(0, 1)
      }
    }
    // Get color
    let indexOfColor = args.indexOf(args.find(s => /color=.+/ig.test(s)))
    let color = ~indexOfColor ? args[indexOfColor] : this.defaultColor
    if (color !== this.defaultColor) {
      args.splice(indexOfColor, 1)
      color = this.getColor(color.replace(/color=/i, ''), msg, user)
    }
    // Send msg
    this.embed(msg, {
      author: { name: user.name, icon_url: user.avatar },
      description: args.join(' '),
      color: color
    })
  }, {
    deleteAfter: false
  })
}
