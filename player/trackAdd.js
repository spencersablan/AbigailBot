module.exports = (client, message, queue, track) => {
    const Discord = require('discord.js');

    const trackAddEmbed = new Discord.MessageEmbed()
        .addField(`${client.emotes.music} - Music`, `${track.title} has been added to the queue !`)
        .setColor('#0099ff');

    message.channel.send(trackAddEmbed);
};