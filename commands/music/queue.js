module.exports = {
    name: 'queue',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}queue',

    execute(client, message) {
        const Discord = require('discord.js');

        const queueNotConnectedEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `You're not in a voice channel!`)
            .setColor('#0099ff');

        const queueSameVoiceChannelEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `You are not in the same voice channel!`)
            .setColor('#0099ff');

        const queueNoMusicEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `No music currently playing!`)
            .setColor('#0099ff');

        if (!message.member.voice.channel) return message.channel.send(queueNotConnectedEmbed);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(queueSameVoiceChannelEmbed);

        const queue = client.player.getQueue(message);

        if (!client.player.getQueue(message)) return message.channel.send(queueNoMusicEmbed);

        const queueSuccessEmbed = new Discord.MessageEmbed()
        .setDescription(`**Server queue - ${message.guild.name} ${client.emotes.queue} ${client.player.getQueue(message).loopMode ? '(looped)' : ''}**\nCurrent : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
            return `**#${i + 1}** - ${track.title} | ${track.author} (requested by : ${track.requestedBy.username})`
        }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `And **${queue.tracks.length - 5}** other songs...` : `In the playlist **${queue.tracks.length}** song(s)...`}`))
        .setColor('#0099ff');

        message.channel.send(queueSuccessEmbed);
    },
};