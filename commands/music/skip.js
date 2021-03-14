const Discord = require('discord.js');

module.exports = {
    name: 'skip',
    aliases: ['sk'],
    category: 'Music',
    utilisation: '{prefix}skip',
    doNotDm: true,

    execute(client, message) {
        const skipNotConnectedEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `You're not in a voice channel!`)
            .setColor('#0099ff');

        const skipSameVoiceChannelEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `You are not in the same voice channel!`)
            .setColor('#0099ff');

        const skipNoMusicEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `No music currently playing!`)
            .setColor('#0099ff');

        const skipSuccessEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.success} - Music`, `The current music has just been **skipped** !`)
            .setColor('#0099ff');

        if (!message.member.voice.channel) return message.channel.send(skipNotConnectedEmbed);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(skipSameVoiceChannelEmbed);

        if (!client.player.getQueue(message)) return message.channel.send(skipNoMusicEmbed);

        client.player.skip(message);

        message.channel.send(skipSuccessEmbed);
    },
};