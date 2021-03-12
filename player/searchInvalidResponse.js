module.exports = (client, message, query, tracks, content, collector) => {
    const Discord = require('discord.js');
    
    const searchInvalidResponseEmbed = new Discord.MessageEmbed()
        .addField(`${client.emotes.success} - Music`, `The selection has been **cancelled** !`)
        .setColor('#0099ff');

    const searchInvalidResponseFailEmbed = new Discord.MessageEmbed()
        .addField(`${client.emotes.error} - Music`, `You must send a valid number between **1** and **${tracks.length}** !`)
        .setColor('#0099ff');

    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(searchInvalidResponseEmbed);
    } else message.channel.send(searchInvalidResponseFailEmbed);
};