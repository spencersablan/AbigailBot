module.exports = (client, message, queue, playlist) => {
    const Discord = require('discord.js');

    const playlistAddEmbed = new Discord.MessageEmbed()
        .addField(`${client.emotes.music} - Music`, `${playlist.title} has been added to the queue (**${playlist.tracks.length}** songs)!`)
        .setColor('#0099ff');
    
    message.channel.send(playlistAddEmbed);
};