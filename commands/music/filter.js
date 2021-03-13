const Discord = require('discord.js');

module.exports = {
    name: 'filter',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, args) {
        const filterNotConnectedEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `You're not in a voice channel!`)
            .setColor('#0099ff');

        const filterSameVoiceChannelEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `You are not in the same voice channel!`)
            .setColor('#0099ff');

        const filterNoMusicEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `No music currently playing!`)
            .setColor('#0099ff');

        const filterSpecifyFilterEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `Please specify a valid filter to enable or disable!`)
            .setColor('#0099ff');

        const filterDoesNotExistEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Music`, `This filter doesn't exist, try for example (8D, vibrato, pulsator...) !`)
            .setColor('#0099ff');

        const filterAddEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.music} - Music`, `I'm **adding** the filter to the music, please wait... Note : the longer the music is, the longer this will take.`)
            .setColor('#0099ff');

        const filterRemoveEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.music} - Music`, `I'm **disabling** the filter on the music, please wait... Note : the longer the music is, the longer this will take.`)
            .setColor('#0099ff');

        if (!message.member.voice.channel) return message.channel.send(filterNotConnectedEmbed);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(filterSameVoiceChannelEmbed);

        if (!client.player.getQueue(message)) return message.channel.send(filterNoMusicEmbed);

        if (!args[0]) return message.channel.send(filterSpecifyFilterEmbed);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(filterDoesNotExistEmbed);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(filterAddEmbed);
        else message.channel.send(filterRemoveEmbed);
    },
};