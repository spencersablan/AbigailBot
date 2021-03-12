module.exports = {
    name: 'ping',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}ping',

    execute(client, message) {
        const Discord = require('discord.js');
        
        const pingEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.success} - Ping`, `Pong! **${client.ws.ping}ms**`)
            .setColor('#0099ff');

        message.channel.send(pingEmbed);
    },
};