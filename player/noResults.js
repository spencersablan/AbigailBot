module.exports = (client, message, query) => {
    const Discord = require('discord.js');

    const noResultsEmbed = new Discord.MessageEmbed()
        .addField(`${client.emotes.error} - Music`, `No results found on YouTube for ${query}.`)
        .setColor('#0099ff');
    
    message.channel.send(noResultsEmbed);
};