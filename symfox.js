const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX  = ";;";
const Commando = require('discord.js-commando');
const path = require('path');


bot.on("ready", function()
{
    console.log("SymverseBot v1.0.0 Beta is running!");
    bot.user.setStatus("online");
    bot.user.setUsername("Symfox");
    bot.user.setPresence(
    {
        game:
        {
          name:';;help',
          type: 0
        }
    });
});

bot.on('message', function(message)
{
    if (message.author.equals(bot.user)) return; //If the message is from the bot, return
    if (!message.content.startsWith(PREFIX)) return; //If the message don't start with the prefix, return

    var args = message.content.substring(PREFIX.length).split(" "); //Split the message in args

    switch (args[0].toLowerCase())
    {
        case "ping":
            message.channel.send('Pinging...').then(sent => {
            sent.edit(`Pong! Took ${sent.createdTimestamp - message.createdTimestamp}ms`);
            });
            break;

        case "info":
            var embed = new Discord.RichEmbed()
            .addField("Information", "Version: `1.0.0 beta` ,\n Created by `@ECC9#6057` with help of `@ATZ#0831` \n \n `Email: galbence2002@gmail.com` .")
            .setColor(0xFC142B)
            .setFooter("Under development... Email: galbence2002@gmail.com")
            .setThumbnail(message.author.displayAvatarURL)
            message.channel.sendEmbed(embed);
            break;

        case "hi":
            message.reply("Hi :D");
            break;

        case "test":
            message.channel.send("Test is OK.");
            break;

        case "rekt":
            message.channel.send("GET REKT!");
            break;

        case "help":
           message.channel.send("Check you'r DM! You got a :mailbox:");
           message.author.send("Here are all of the commands expect the secret commands. To request new command(s) send mail to `galbence2002@gmail.com`");
           message.author.send("Want to invite me to your server? Say `;;symfox` then you get the invitation link :D");
           var embed = new Discord.RichEmbed()
           .addField("Commands:", "```\n ;;symfox \n \n ;;secretcommands \n \n ;;hi \n \n ;;test \n \n ;;rekt \n \n ;;staff \n \n ;;error \n \n ;;inivte \n \n ;;afk \n \n ;;back \n \n ;;thx \n \n ;;cookie \n \n ;;yes \n \n ;;no \n \n ;;ok \n \n ;;what \n \n ;;pancake \n \n ;;lol \n \n ;;um \n \n ;;england \n \n ;;boneless \n \n ;;pphoenix \n \n ;;ephoenix \n \n ;;nphoenix \n \n ;;phoenix \n \n ;;noob \n \n ;;pff \n \n ;;potato \n \n ;;peanut \n \n More commands coming soon...```")
           .setColor(0xFC142B)
           .setFooter("Under development... Email: galbence2002@gmail.com")
           .setThumbnail(message.author.displayAvatarURL);
           message.author.send({embed});
           message.author.send("Join our chat: https://discord.gg/DBgruE4");
           break;

        case "devs":
            var embed = new Discord.RichEmbed()
            .addField("Developer Team:", "ECC9 , Gaiben , Ipz , Anarchy ")
            .setColor(0xFC142B)
            .setThumbnail(message.author.displayAvatarURL);
            message.channel.sendEmbed(embed);
            break;

        case "invite":
            message.channel.send("Your Invitation Link: ```https://discord.gg/DBgruE4``` ");
            break;

        case "afk":
            message.reply("I set you AFK.");
            message.member.addRole("353620798197727234");
            break;

        case "thx":
            message.channel.send("No problem :)");
            break;

        case "cookie":
            message.channel.send("I gave you a :cookie: :D Do you need milk with it?");
            break;

        case "no":
            message.channel.send("Ok.");
            break;

        case "yes":
            message.channel.send("Ok.");
            break;

        case "back":
            message.reply("Welcome back!");
            message.member.removeRole("353620798197727234");
           break;

        case "ok":
            message.channel.send("Ok.");
           break;

        case "what":
            message.channel.send("LOL WHAT?", {files: [{attachment: 'http://i0.kym-cdn.com/photos/images/facebook/000/000/151/n725075089_288918_2774.jpg' }]} );
           break;

        case "lol":
            message.channel.send("LOL", {files: [{attachment: 'http://i0.kym-cdn.com/entries/icons/original/000/004/815/lologuy.jpg' }]} );
            break;

        case "um":
            message.channel.send("um...", {files: [{attachment: 'https://cdn.discordapp.com/attachments/219154605798326273/354689528243421194/084.png' }]} );
            break;

        case "england":
            message.channel.send("England", {files: [{attachment: 'https://cdn.discordapp.com/attachments/219154605798326273/354961660013707265/anjObY0_700b.png' }]} );
            break;

        case "boneless":
            message.channel.send("Boneless :pizza:", {files: [{attachment: 'https://cdn.discordapp.com/attachments/355001148194947074/355463833600393236/maxresdefault.png' }]} );
            break;

        case "pphoenix":
            message.channel.send("Phoenix 1", {files: [{attachment: 'https://i.pinimg.com/236x/36/d3/d0/36d3d0d6dafb20ab8e54e85b24b6061b--phoenix-bird-phoenix-logo.jpg' }]} );
            break;

        case "ephoenix":
            message.channel.send("Phoenix 2", {files: [{attachment: 'https://images2.alphacoders.com/451/451370.jpg' }]} );
            break;

        case "nphoenix":
            message.channel.send("Phoenix 3", {files: [{attachment: 'https://yt3.ggpht.com/-Tpf58bZRlHQ/AAAAAAAAAAI/AAAAAAAAAAA/ocgm2czmTNE/s900-c-k-no-mo-rj-c0xffffff/photo.jpg' }]} );
            break;

        case "phoenix":
            message.channel.send("Phoenix 4", {files: [{attachment: 'http://www.phoenixtradingstrategies.com/wp-content/uploads/2014/09/Phoenix.jpg' }]} );
            break;

        case "pancake":
            message.channel.send("Here are some :pancakes:", {files: [{attachment: 'http://www.seriouseats.com/images/2015/05/20150517-pancake-primary.jpg' }]} );
            break;

        case "gay":
            message.channel.send("IM GAAAAAYYYYYYYY", {files: [{attachment: 'https://i.ytimg.com/vi/WPviAKaHAN0/hqdefault.jpg' }]} );
            break;

        case "secretcommands":
          message.channel.send("Check you'r DM! I've sent you the secret commands :P");
          message.author.send("Here are all of the secret commands. To request command(s) send email to `galbence2002@gmail.com`");
          var embed = new Discord.RichEmbed()
          .addField("Secret Commands:", "```\n ;;gay (xDD) \n \n ;;hahg \n \n More commands coming soon...```")
          .setColor(0xFC142B)
          .setThumbnail(message.author.displayAvatarURL);
          message.author.send({embed});
            break;
        case "hahg":

          message.channel.send("HAH!", {files: [{attachment: 'https://i.pinimg.com/736x/95/1f/30/951f30bf4fede2b1a77b3f3f73188273--rage-faces-gay.jpg' }]} );
          break;

        case "noob":
          message.channel.send("nub...", {files: [{attachment: 'http://i0.kym-cdn.com/entries/icons/medium/000/005/180/YaoMingMeme.jpg' }]} );
          break;

        case "pff":
          message.channel.send("pfffffff", {files: [{attachment: 'http://www.gamedev.ru/files/images/pfff.png' }]} );
          break;

        case "potato":
          message.channel.send("An angry :potato: here :D", {files: [{attachment: 'https://yt3.ggpht.com/-hRHTc1eQ-Yc/AAAAAAAAAAI/AAAAAAAAAAA/m0Hk6YuhxTM/s900-c-k-no-mo-rj-c0xffffff/photo.jpg' }]} );
          break;

        case "peanut":
          message.channel.send("Here are some :peanuts::peanuts::peanuts::peanuts::peanuts:", {files: [{attachment: 'https://nuts.com/images/auto/510x340/assets/dd79402e574cd109.jpg' }]} );
          break;

        case "symfox":
          message.channel.send("Invite me to you'r server: https://discordapp.com/oauth2/authorize?client_id=353117726824464394&scope=bot&permissions=2146959615");
          message.channel.send("In case if you forgot the link, I :mailbox: you the link. Check you'r DM!");
          message.author.send("Invitation link: https://discordapp.com/oauth2/authorize?client_id=353117726824464394&scope=bot&permissions=2146959615");
          break;

        default:
            message.channel.send("Invalid command! Please type `;;help` for the commands list! [ Under development... ]");
            break;
    }
});

bot.login("MzUzMTE3NzI2ODI0NDY0Mzk0.DVTsxg.d8xzlV4Zl3T0yv-tUm-RwhNeu9Q");
