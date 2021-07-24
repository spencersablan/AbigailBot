const Discord = require('discord.js');

module.exports = {
    name: 'roll',
    aliases: ['d'],
    category: 'Fun',
	utilisation: '{prefix}roll <number>',

    execute(client, message, args) {
		const amount = parseInt(args[0]);

		function getRandInt(min, max) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min)) + min;
		}

		if (isNaN(amount)) {
			randInt = getRandInt(1, 6);
		} else {
			randInt = getRandInt(1, amount);
		}

		const rollEmbed = new Discord.MessageEmbed()
			.addField(`${client.emotes.success} - Roll`, `You rolled a **${randInt}** !`)
			.setColor('#0099ff');

		message.channel.send(rollEmbed);
	}
};