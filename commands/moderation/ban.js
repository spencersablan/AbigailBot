const Discord = require('discord.js');

module.exports = {
    name: 'ban',
    aliases: [],
    category: 'Moderation',
    utilisation: '{prefix}ban [user]',
	permissions: 'BAN_MEMBERS',
    doNotDm: true,

    execute(client, message, args) {
        if (!message.mentions.users.size) {

            const banFailEmbed = new Discord.MessageEmbed()
			    .addField(`${client.emotes.error} - Ban`, `You must tag a user to ban them!`)
			    .setColor('#0099ff');

	        return message.channel.send(banFailEmbed);
		}

		const member = message.mentions.members.first();
		member.ban();
		
        const banEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.success} - Ban`, `**${member}** was banned.`)
            .setColor('#0099ff');

		message.channel.send(banEmbed);
    },
};