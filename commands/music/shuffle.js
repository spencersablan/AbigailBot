const Discord = require('discord.js');

module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    category: 'Music',
    utilisation: '{prefix}shuffle',

    execute(client, message) {
        const shuffleNotConnectedEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `You're not in a voice channel!`)
            .setColor('#0099ff');

        const shuffleSameVoiceChannelEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `You are not in the same voice channel!`)
            .setColor('#0099ff');

        const shuffleNoMusicEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `No music currently playing!`)
            .setColor('#0099ff');

        const shuffleSuccessEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.success} - Music`, `Queue shuffled **${client.player.getQueue(message).tracks.length}** song(s)!`)
            .setColor('#0099ff');

        if (!message.member.voice.channel) return message.channel.send(shuffleNotConnectedEmbed);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(shuffleSameVoiceChannelEmbed);

        if (!client.player.getQueue(message)) return message.channel.send(shuffleNoMusicEmbed);

        client.player.shuffle(message);

        return message.channel.send(shuffleSuccessEmbed);
    },
};