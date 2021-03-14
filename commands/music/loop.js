const Discord = require('discord.js');

module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    category: 'Music',
    utilisation: '{prefix}loop <queue>',
    doNotDm: true,

    execute(client, message, args) {
        const loopNotConnectedEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `You're not in a voice channel!`)
            .setColor('#0099ff');

        const loopSameVoiceChannelEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `You are not in the same voice channel!`)
            .setColor('#0099ff');

        const loopNoMusicEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `No music currently playing!`)
            .setColor('#0099ff');
        
        const loopDisabledEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `Repeat mode **disabled** !`)
            .setColor('#0099ff');

        const loopEnabledEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `Repeat mode **enabled** the current music will be repeated endlessly!`)
            .setColor('#0099ff');

        const loopEnabledQueueEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `Repeat mode **enabled** the whole queue will be repeated endlessly!`)
            .setColor('#0099ff');

        if (!message.member.voice.channel) return message.channel.send(loopNotConnectedEmbed);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(loopSameVoiceChannelEmbed);

        if (!client.player.getQueue(message)) return message.channel.send(loopNoMusicEmbed);

        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.channel.send(loopDisabledEmbed);
            } else {
                client.player.setLoopMode(message, true);
                return message.channel.send(loopEnabledQueueEmbed);
            };
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.channel.send(loopDisabledEmbed);
            } else {
                client.player.setRepeatMode(message, true);
                return message.channel.send(loopEnabledEmbed);
            };
        };
    },
};