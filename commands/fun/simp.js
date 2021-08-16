const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'simp',

    execute(client, interaction) {
		interaction.deferReply();

		fetch('https://thegooddude22.github.io/abigailbot/data/simp')
		.then(res => res.json())
		.then(images => {	
			const image = images[Math.floor(Math.random() * images.length)];
	
			return interaction.user.send({ files: [image]})
				.then(() => {
					interaction.editReply('Thanks for the dono! I\'ve sent you a picture to show my gratitude.');
				})
				.catch(error => {
					console.log(error)
					interaction.editReply({content: 'It seems like I can\'t DM you!', ephemeral: true});
				});
		})
	}
}