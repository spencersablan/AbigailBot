module.exports = (client, message, track) => {
    const Discord = require('discord.js');

    const trackStartEmbed = new Discord.MessageEmbed()
        .addField(`${client.emotes.music} - Music`, `Now playing ${track.title} into ${message.member.voice.channel.name} ...`)
        .setColor('#0099ff');

    message.channel.send(trackStartEmbed);
};