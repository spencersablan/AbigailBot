const fetch = require('node-fetch');

module.exports = {
    name: 'fortnite',

    async execute(client, interaction) {
		interaction.deferReply();

		fetch('https://thegooddude22.github.io/abigailbot/fortnite')
		.then(res => res.json())
		.then(json => {
			const challenges = json;

			const { weapon, weaponType, inventory, interact, drop, categories } = challenges;

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
						interaction.editReply(`${get(interact)}`);
						break;
					case "drop":
						interaction.editReply(`You have to drop at ${get(drop)}.`);
				}
			}
		})
	}
};