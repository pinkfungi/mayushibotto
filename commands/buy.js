const Discord = require("discord.js");
exports.run = (client, message, args) => {
   const embed = new Discord.RichEmbed()
            .setTitle("Role Shop equip")
            .setAuthor("Mayushi")
            .setColor("#ff31e8")
            .setDescription(" To get an available role,type !+ rolename")
            .setFooter("these roles are free", "https://i.imgur.com/R0R1qPb.png")
            .setImage("http://i.imgur.com/fNm0ZoZ.jpg")
            .setThumbnail("https://i.imgur.com/bXdI6R7.png")
            .addField('<a:madblob:461529987552378880>Hentai',`unlock the perv`)
            .addField('<a:game:463182489154748419>Gamer',`if you love games`)
     message.channel.send({embed});
}

