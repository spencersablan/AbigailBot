const Discord = require('discord.js');

module.exports = {
    name: 'roll',

    execute(client, interaction) {
		let amount = '';
		if (interaction.options.data[0]) {
			amount = interaction.options.data[0].value
		}
		
		function getRandInt(min, max) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min)) + min;
		}

		if (!Number.isInteger(amount)) {
			randInt = getRandInt(1, 6);
		} else {
			randInt = getRandInt(1, amount);
		}

		interaction.reply(`You rolled a **${randInt}**!`);
	}
};