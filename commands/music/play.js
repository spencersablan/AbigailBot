const Discord = require('discord.js');

module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',
    doNotDm: true,

    execute(client, message, args) {
        const playNotConnectedEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `You're not in a voice channel!`)
            .setColor('#0099ff');

        const playSameVoiceChannelEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `You are not in the same voice channel!`)
            .setColor('#0099ff');

        const playNoInputEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `Please indicate the title of a song!`)
            .setColor('#0099ff');

        if (!message.member.voice.channel) return message.channel.send(playNotConnectedEmbed);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(playSameVoiceChannelEmbed);

        if (!args[0]) return message.channel.send(playNoInputEmbed);

        client.player.play(message, args.join(" "), { firstResult: true });
    },
};