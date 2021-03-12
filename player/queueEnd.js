module.exports = (client, message, queue) => {
    const Discord = require('discord.js');

    const queueEndEmbed = new Discord.MessageEmbed()
        .addField(`${client.emotes.off} - Music`, `Music stopped as there is no more music in the queue !`)
        .setColor('#0099ff');

    message.channel.send(queueEndEmbed);
};