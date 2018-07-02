const Discord = require("discord.js");
exports.run = (client, message, args) => {
   const embed = new Discord.RichEmbed()
            .setTitle("Role Shop equip")
            .setAuthor("Mayushi")
            .setColor("#fc0000")
            .setDescription(" to unequip,type !- rolename")
            .setFooter("i take your role back", "https://i.imgur.com/R0R1qPb.png")
            .setImage("http://i.imgur.com/fNm0ZoZ.jpg")
            .setThumbnail("https://i.imgur.com/bXdI6R7.png");
     message.channel.send({embed});
}
