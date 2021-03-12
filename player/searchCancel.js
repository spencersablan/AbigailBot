module.exports = (client, message, query, tracks) => {
    const Discord = require('discord.js');

    const searchCancelEmbed = new Discord.MessageEmbed()
        .addField(`${client.emotes.error} - Music`, `You did not provide a valid response ... Please send the command again!`)
        .setColor('#0099ff');
    
    message.channel.send(searchCancelEmbed);
};