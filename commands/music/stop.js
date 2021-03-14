const Discord = require('discord.js');

module.exports = {
    name: 'stop',
    aliases: ['dc'],
    category: 'Music',
    utilisation: '{prefix}stop',
    doNotDm: true,

    execute(client, message) {
        const stopNotConnectedEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `You're not in a voice channel!`)
            .setColor('#0099ff');

        const stopSameVoiceChannelEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `You are not in the same voice channel!`)
            .setColor('#0099ff');

        const stopNoMusicEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `No music currently playing!`)
            .setColor('#0099ff');

        const stopSuccessEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.success} - Music`, `Music **stopped** into this server!`)
            .setColor('#0099ff');
        if (!message.member.voice.channel) return message.channel.send(stopNotConnectedEmbed);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(stopSameVoiceChannelEmbed);

        if (!client.player.getQueue(message)) return message.channel.send(stopNoMusicEmbed);

        client.player.setRepeatMode(message, false);
        client.player.stop(message);

        message.channel.send(stopSuccessEmbed);
    },
};