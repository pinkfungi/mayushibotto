const Discord = require("discord.js");
exports.run = (client, message, args) => {
   const embed = new Discord.RichEmbed()
            .setTitle("help")
            .setAuthor("Mayushi")
            .setColor("#40ff0e")
            .setDescription("shop commands")
            .setFooter("happy to help", "https://i.imgur.com/R0R1qPb.png")
            .setThumbnail(client.user.avatarURL)
            .addField("$buy   ","shows available roles")
            .addField("$sell  ","also shows available roles in shop")
            .addField("$+   ","prefix before a role to add it")
            .addField("$-   ","prefix before a role to remove it")
            .addField("$help   ","shows this    ")
            .addField("$ping","replies with pong if bot is alive")
            .addField("$kick","kicks mentioned user");

     message.channel.send({embed});
}
