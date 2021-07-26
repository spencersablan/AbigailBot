const fetch = require('node-fetch');

module.exports = {
    name: 'apex',

    async execute(client, interaction) {
		interaction.defer();

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
						interaction.editReply(`You have to play as ${get(legend)}.`);
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
						interaction.editReply(`${get(interact)} while playing as ${get(legend)}`);
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