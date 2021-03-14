const Discord = require('discord.js');

module.exports = {
    name: 'clear-queue',
    aliases: ['cq'],
    category: 'Music',
    utilisation: '{prefix}clear-queue',
    doNotDm: true,

    execute(client, message) {
        const cqNotConnectedEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `You're not in a voice channel!`)
            .setColor('#0099ff');

        const cqSameVoiceChannelEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `You are not in the same voice channel!`)
            .setColor('#0099ff');

        const cqNoMusicEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `No music currently playing!`)
            .setColor('#0099ff');
        
        const cqOneSongEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `There is only one song in the queue.`)
            .setColor('#0099ff');

        const cqSuccessEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.success} - Music`, `The queue has just been **removed** !`)
            .setColor('#0099ff');

        if (!message.member.voice.channel) return message.channel.send(cqNotConnectedEmbed);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(cqSameVoiceChannelEmbed);

        if (!client.player.getQueue(message)) return message.channel.send(cqNoMusicEmbed);

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(cqOneSongEmbed);

        client.player.clearQueue(message);

        message.channel.send(cqSuccessEmbed);
    },
};