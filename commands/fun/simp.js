const Discord = require('discord.js');

module.exports = {
    name: 'simp',

    execute(client, interaction) {
		const images = [
			"https://i.imgur.com/PrQ0439.png",
			"https://i.imgur.com/trK9fyy.jpg",
			"https://i.imgur.com/HuUwR2G.jpg",
			"https://i.imgur.com/U7GRdDf.jpg",
			"https://i.imgur.com/3QBom8e.jpg",
			"https://i.imgur.com/qAQJ9nv.jpg",
			"https://i.imgur.com/maX6afl.jpg",
			"https://i.imgur.com/8BOpgW7.jpg",
			"https://i.imgur.com/CyShG6Y.png",
			"https://i.imgur.com/KjISsaA.jpg",
			"https://i.imgur.com/TMkTz0j.png",
			"https://i.imgur.com/03X2aEH.png",
			"https://i.imgur.com/MgzhmsX.jpg",
			"https://i.imgur.com/gPhSNsC.jpg",
			"https://i.imgur.com/w5YcaIA.jpg",
			"https://i.imgur.com/B5wQ6p5.jpg",
			"https://i.imgur.com/9mKjFwz.jpg",
			"https://i.imgur.com/BPQymZu.jpg",
			"https://i.imgur.com/Ut0NUhr.jpg",
			"https://i.imgur.com/KLhy5CK.jpg",
			"https://i.imgur.com/CTVkzKl.jpg",
			"https://i.imgur.com/G4uBLEm.jpg",
			"https://i.imgur.com/FRMtuMp.jpg",
			"https://i.imgur.com/fcuf2fC.jpg",
			"https://i.imgur.com/TkDrKpq.jpg",
			"https://i.imgur.com/ilKFDea.jpg",
			"https://i.imgur.com/je7xbSo.jpg",
			"https://i.imgur.com/tytEg3c.jpg"
		];
		
		const image = images[Math.floor(Math.random() * images.length)];

		const imageEmbed = new Discord.MessageEmbed()
			.setImage(image)

		return interaction.user.send({ embeds: [imageEmbed]})
		.then(() => {
			interaction.reply('Thanks for the dono! I\'ve sent you a picture to show my gratitude.');
		})
		.catch(error => {
			console.log(error)
			interaction.reply({content: 'It seems like I can\'t DM you!', ephemeral: true});
		});
	}
}