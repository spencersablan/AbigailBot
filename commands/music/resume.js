const Discord = require('discord.js');

module.exports = {
    name: 'resume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}resume',

    execute(client, message) {
        const resumeNotConnectedEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `You're not in a voice channel!`)
            .setColor('#0099ff');

        const resumeSameVoiceChannelEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `You are not in the same voice channel!`)
            .setColor('#0099ff');

        const resumeNoMusicEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `No music currently playing!`)
            .setColor('#0099ff');

        const resumeAlreadyEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `No music is already playing!`)
            .setColor('#0099ff');

        const resumeSuccessEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.success} - Music`, `Song ${client.player.getQueue(message).playing.title} resumed!`)
            .setColor('#0099ff');

        if (!message.member.voice.channel) return message.channel.send(resumeNotConnectedEmbed);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(resumeSameVoiceChannelEmbed);

        if (!client.player.getQueue(message)) return message.channel.send(resumeNoMusicEmbed);

        if (!client.player.getQueue(message).paused) return message.channel.send(resumeAlreadyEmbed);

        client.player.resume(message);

        message.channel.send(resumeSuccessEmbed);
    },
};