const Discord = require('discord.js');

module.exports = {
    name: 'pause',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}pause',
    doNotDm: true,

    execute(client, message) {
        const pauseNotConnectedEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `You're not in a voice channel!`)
            .setColor('#0099ff');

        const pauseSameVoiceChannelEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `You are not in the same voice channel!`)
            .setColor('#0099ff');

        const pauseNoMusicEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `No music currently playing!`)
            .setColor('#0099ff');

        const pauseAlreadyEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `No music is already paused!`)
            .setColor('#0099ff');

        const pauseSuccessEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.success} - Music`, `Song ${client.player.getQueue(message).playing.title} paused!`)
            .setColor('#0099ff');

        if (!message.member.voice.channel) return message.channel.send(pauseNotConnectedEmbed);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(pauseSameVoiceChannelEmbed);

        if (!client.player.getQueue(message)) return message.channel.send(pauseNoMusicEmbed);

        if (client.player.getQueue(message).paused) return message.channel.send(pauseAlreadyEmbed);

        client.player.pause(message);

        message.channel.send(pauseSuccessEmbed);
    },
};