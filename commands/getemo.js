const Discord = require("discord.js");
exports.run = (client, message, args) => { 
let static = [], animated = [];
           message.guild.emojis.forEach(emoji => emoji.animated ? animated.push([emoji.id, emoji.name]) : static.push([emoji.id, emoji.name]));
           console.log('\nAnimated Emojis\n');
           animated.forEach(emoji => console.log('<a:' + emoji[1] + ':' + emoji[0] + '>'));
}
