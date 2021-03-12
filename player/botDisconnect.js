module.exports = (client, message, queue) => {
    const Discord = require('discord.js');

    const botDisconnectEmbed = new Discord.MessageEmbed()
        .addField(`${client.emotes.off} - Music`, `Music stopped as I have been disconnected from the channel.`)
        .setColor('#0099ff');

    message.channel.send(botDisconnectEmbed);
};