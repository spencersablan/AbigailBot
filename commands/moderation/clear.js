const Discord = require('discord.js');

module.exports = {
    name: 'clear',
    aliases: ['purge','prune'],
    category: 'Moderation',
    utilisation: '{prefix}clear [1-99]',
	permissions: 'MANAGE_MESSAGES',
	doNotDm: true,

    execute(client, message, args) {
        const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {

			const clearFailEmbed = new Discord.MessageEmbed()
				.addField(`${client.emotes.error} - Clear`, `That doesn't seem to be a valid number.`)
				.setColor('#0099ff');

			return message.channel.send(clearFailEmbed);
		} else if (amount <= 1 || amount > 100) {

			const clearFail1Embed = new Discord.MessageEmbed()
				.addField(`${client.emotes.error} - Clear`, `Input a number between **1** and **99**.`)
				.setColor('#0099ff');

			return message.channel.send(clearFail1Embed);
		}

		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);

			const clearFail2Embed = new Discord.MessageEmbed()
			.addField(`${client.emotes.error} - Clear`, `There was an error trying to prune messages.`)
			.setColor('#0099ff');

			message.channel.send(clearFail2Embed);
		});
    },
};