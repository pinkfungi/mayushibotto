const Discord = require("discord.js");
exports.run = async (client, message, args) => {
     let roles= message.guild.roles.filter(role => role.name.startsWith("#"));
     let str = args.join(" ");
     let role = roles.find(role => role.name.slice(1).toLowerCase() === str.toLowerCase());
     if (!role) return message.channel.send("This role does not exist or is not for sale" );{
          await message.member.addRole(role);
          if (str == "hentai"){    
          embed = new Discord.RichEmbed()
          .setTitle("nsfw Role equipped")
            .setAuthor("upset Mayushi")
            .setColor("#fc00d7") 
            .setDescription(`shame on ${message.author.username}`)
            .setFooter("is hentai",message.author.avatarURL)
            .setThumbnail("http://hentaihaven.org/package/2014/11/HH_logo_transparent-400-width.png")
            .addField('PERVERT',`ecchi baka`)
          .setImage("https://vignette.wikia.nocookie.net/rwby/images/d/d4/Pervert.gif/revision/latest?cb=20170621011133");
     message.channel.send({embed});
          } 
          if (str == "gamer"){    
            embed = new Discord.RichEmbed()
            .setTitle("gamer Role equipped")
            .setAuthor("Mayushi")
            .setColor("#ee117b")
            .setDescription(`<a:congo:463190138047168525> Congratulations ${message.author.username}`)
            .setFooter("is now a gamer",message.author.avatarURL)
            .setThumbnail("http://s7.favim.com/orig/150121/adorable-cute-gif-green-Favim.com-2406607.gif")
            .addField('<a:game:463182489154748419>GAMER',`you love games lol`)
            .setImage("https://pa1.narvii.com/6792/1b835eb6198553d5c0a5528fccebea9290d72654_hq.gif");
       message.channel.send({embed});
            } 
              
               
}
}
