const Discord = require('discord.js');

module.exports = {
    name: 'search',
    aliases: ['sr'],
    category: 'Music',
    utilisation: '{prefix}search [name/URL]',

    execute(client, message, args) {
        const searchNotConnectedEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `You're not in a voice channel!`)
            .setColor('#0099ff');

        const searchSameVoiceChannelEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `You are not in the same voice channel!`)
            .setColor('#0099ff');

        const searchNoInputEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `Please indicate the title of a song!`)
            .setColor('#0099ff');

        if (!message.member.voice.channel) return message.channel.send(searchNotConnectedEmbed);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(searchSameVoiceChannelEmbed);

        if (!args[0]) return message.channel.send(searchNoInputEmbed);

        client.player.play(message, args.join(" "));
    },
};