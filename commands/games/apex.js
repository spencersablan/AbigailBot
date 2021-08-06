const { MessageActionRow, MessageButton } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'apex',

    async execute(client, interaction) {
		await interaction.deferReply();

		fetch('https://thegooddude22.github.io/abigailbot/apex')
		.then(res => res.json())
		.then(json => {
			const challenges = json;

			const legend = challenges.legend
			const legendType = challenges.legendType
			const weapon = challenges.weapon
			const weaponType = challenges.weaponType
			const inventory = challenges.inventory
			const interact = challenges.interact
			const kingsCanyon = challenges.kingsCanyon
			const olympus = challenges.olympus
			const worldsEdge = challenges.worldsEdge
			const categories = challenges.categories

			function get(input) {
				let array = [];
				for(let item in input) {
					if ( input.hasOwnProperty(item) ) {
						for( let i=0; i<input[item]; i++ ) {
							array.push(item);
						}
					}
				}
				return array[Math.floor(Math.random() * array.length)];
			}
	
			let selected = '';
			if (interaction.options.data[0]) {
				selected = interaction.options.data[0].value
			}
	
			generateChallenge(selected);
	
			function generateChallenge(selected) {
	
				switch (selected) {
	
					default:
						generateChallenge(get(categories));
						break;
					case "legend":
						const legendRow = new MessageActionRow()
						.addComponents(
							new MessageButton()
								.setCustomId('legendReroll')
								.setLabel('🎲  Legend')
								.setStyle('SECONDARY'),
						)

						interaction.editReply({ content: `You have to play as ${get(legend)}.`, components: [legendRow] });

						interaction.fetchReply()
							.then(message => {
								const collector = message.createMessageComponentCollector({ componentType: 'BUTTON', time: 60000 });
								collector.on('collect', i => {
									if (i.customId === 'legendReroll') {
										if (i.user.id === interaction.user.id) {
											i.update(`You have to play as ${get(legend)}.`);
										} else {
											i.reply({ content: `This button isn't for you!`, ephemeral: true });
										}
									}
								});

								collector.on('end', collected => {
									interaction.editReply({ components: [] })
								});
							})
						break;
					case "legendType":
						interaction.editReply(`Play the round as any ${get(legendType)}.`);
						break;
					case "weapon":
						interaction.editReply(`You can only use the ${get(weapon)}.`);
						break;
					case "weaponType":
						interaction.editReply(`You can only use ${get(weaponType)}.`);
						break;
					case "inventory":
						interaction.editReply(`${get(inventory)}`);
						break;
					case "interact":
						const chosenInteract = get(interact);

						const interactRow = new MessageActionRow()
						.addComponents(
							new MessageButton()
								.setCustomId('interactReroll')
								.setLabel('🎲  Legend')
								.setStyle('SECONDARY'),
						)

						interaction.editReply({ content:`${chosenInteract} while playing as ${get(legend)}`, components: [interactRow] });

						interaction.fetchReply()
							.then(message => {
								const collector = message.createMessageComponentCollector({ componentType: 'BUTTON', time: 60000 });
								collector.on('collect', i => {
									if (i.customId === 'interactReroll') {
										if (i.user.id === interaction.user.id) {
											i.update(`${chosenInteract} while playing as ${get(legend)}`);
										} else {
											i.reply({ content: `This button isn't for you!`, ephemeral: true });
										}
									}
								});

								collector.on('end', collected => {
									interaction.editReply({ components: [] })
								});
							})
						break;
					case "drop":
						fetch(`https://api.mozambiquehe.re/maprotation?auth=${client.apiKeys.mozambiquehere}`)
							.then(res => res.json())
							.then(json => {
								const currentMap = json;
	
								switch (currentMap.current.map) {
	
									case "Olympus":
										interaction.editReply(`You have to land ${get(olympus)}.`);
										break;
									case "World's Edge":
										interaction.editReply(`You have to land ${get(worldsEdge)}.`);
										break;
									case "Kings Canyon":
										interaction.editReply(`You have to land ${get(kingsCanyon)}.`)
								}
							})
				}
			}
		})
	}
};