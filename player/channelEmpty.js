module.exports = (client, message, queue) => {
    const Discord = require('discord.js');

    const channelEmptyEmbed = new Discord.MessageEmbed()
        .addField(`${client.emotes.off} - Music`, `Music stopped as there are no more members in the voice channel !`)
        .setColor('#0099ff');

    message.channel.send(channelEmptyEmbed);
};