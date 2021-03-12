module.exports = {
    name: 'kick',
    aliases: [],
    category: 'Moderation',
    utilisation: '{prefix}kick [user]',
	permissions: 'KICK_MEMBERS',

    execute(client, message, args) {
        const Discord = require('discord.js');

        if (!message.mentions.users.size) {

            const kickFailEmbed = new Discord.MessageEmbed()
                .addField(`${client.emotes.error} - Kick`, `You must tag a user to kick them!`)
                .setColor('#0099ff');

			return message.reply(kickFailEmbed);
		}

		const member = message.mentions.members.first();
		member.kick();
		
        const kickEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.success} - Kick`, `**${member}** was kicked.`)
            .setColor('#0099ff');

		message.channel.send(kickEmbed);
    },
};