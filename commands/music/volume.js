const Discord = require('discord.js');

module.exports = {
    name: 'volume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}volume [1-100]',

    execute(client, message, args) {
        const volumeNotConnectedEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `You're not in a voice channel!`)
            .setColor('#0099ff');

        const volumeSameVoiceChannelEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `You are not in the same voice channel!`)
            .setColor('#0099ff');

        const volumeNoMusicEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `No music currently playing!`)
            .setColor('#0099ff');

        const volumeInvalidNumberEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `Please enter a valid number!`)
            .setColor('#0099ff');

        const volumeOneToHundredEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `Please enter a valid number (between 1 and 100) !`)
            .setColor('#0099ff');

        if (!message.member.voice.channel) return message.channel.send(volumeNotConnectedEmbed);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(volumeSameVoiceChannelEmbed);

        if (!client.player.getQueue(message)) return message.channel.send(volumeNoMusicEmbed);

        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity') return message.channel.send(volumeInvalidNumberEmbed);

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 100) return message.channel.send(volumeOneToHundredEmbed);

        client.player.setVolume(message, parseInt(args[0]));

        const volumeSuccessEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.success} - Music`, `Volume set to **${parseInt(args[0])}%** !`)
            .setColor('#0099ff');

        message.channel.send(volumeSuccessEmbed);
    },
};