module.exports = (client, error, message) => {
    const Discord = require('discord.js');

    const errorNotPlayingEmbed = new Discord.MessageEmbed()
        .addField(`${client.emotes.error} - Music`, `There is no music being played on this server!`)
        .setColor('#0099ff');

    const errorNotConnectedEmbed = new Discord.MessageEmbed()
        .addField(`${client.emotes.error} - Music`, `You are not connected in any voice channel!`)
        .setColor('#0099ff');

    const errorUnableToJoinEmbed = new Discord.MessageEmbed()
        .addField(`${client.emotes.error} - Music`, `I am not able to join your voice channel, please check my permissions!`)
        .setColor('#0099ff');

    const errorVideoUnavailableEmbed = new Discord.MessageEmbed()
        .addField(`${client.emotes.error} - Music`, `${args[0].title} is not available in your country! Skipping...`)
        .setColor('#0099ff');

    const errorMusicStartingEmbed = new Discord.MessageEmbed()
        .addField(`${client.emotes.error} - Music`, `The music is starting... please wait and retry!`)
        .setColor('#0099ff');
        
    const errorDefaultEmbed = new Discord.MessageEmbed()
        .addField(`${client.emotes.error} - Music`, `Something went wrong ... Error : ${error}`)
        .setColor('#0099ff');
        
    switch (error) {
        case 'NotPlaying':
            message.channel.send(errorNotPlayingEmbed);
            break;
        case 'NotConnected':
            message.channel.send(errorNotConnectedEmbed);
            break;
        case 'UnableToJoin':
            message.channel.send(errorUnableToJoinEmbed);
            break;
        case 'VideoUnavailable':
            message.channel.send(errorVideoUnavailableEmbed);
            break;
        case 'MusicStarting':
            message.channel.send(errorMusicStartingEmbed);
            break;
        default:
            message.channel.send(errorDefaultEmbed);
    };
};
