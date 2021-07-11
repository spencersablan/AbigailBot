const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'fortnite',
    aliases: ['fn'],
    category: 'Fun',
	utilisation: '{prefix}fortnite <drop, inventory, gameplay>',

    execute(client, message, args) {
		function outputChallenge(chalText,chalCat) {
			const outputEmbed = new Discord.MessageEmbed()
				.setTitle('Fortnite Challenge')
				.addField(chalCat, `   ${chalText}`)
				.setColor('#0099ff');
			
			message.channel.send(outputEmbed);
		}

		function get(input) {
			var array = [];
			for(var item in input) {
				if ( input.hasOwnProperty(item) ) {
					for( var i=0; i<input[item]; i++ ) {
						array.push(item);
					}
				}
			}
			return array[Math.floor(Math.random() * array.length)];
		}

		const weapon = {
			"Assault Rifle":1,
			"Heavy Assault Rifle":1,
			"Burst Assault Rifle":2,
			"Pulse Rifle":1,
			"Tactical Shotgun":1,
			"Pump Shotgun":1,
			"Lever Action Shotgun":2,
			"Kymera Ray Gun":2,
			"Submachine Gun":1,
			"Suppressed SMG":1,
			"Rapid Fire SMG":1,
			"Pistol":1,
			"Hand Cannon":1,
			"Bolt-Action Sniper Rifle":2,
			"Rail Gun":1,
			"Rocket Launcher":2,
		}

		const weaponType = {
			"Snipers":2,
			"SMGs":1,
			"Assault Rifles":1,
			"Shotguns":2,
			"Pistols":3,
            "Throwables":1,
            "Exotics":1,
		}

		const inventory = {
			"You can only use 1 gun.":1,
			"No guns allowed. You may use throwables and your pickaxe.":1,
			"Only use a single ammo type.":1,
			"Metal builds only.":1,
			"No crafting or upgrading.":1,
			"Only use 2 inventory slots.":1,
			"Only use 3 inventory slots.":1,
			"No health regeneration.":1,
			"Uncommon and below gear.":1,
			"One chest challenge":1,
			"Chests only, no floor loot or death looting.":1,
			"Floor loot only, no death looting or chests.":1,
			"Death looting only, no chests or floor loot.":1,
		}

		const interact = {
			"No building.":1,
			"Do not use your Harvesting Tool.":1,
			"You have to pickaxe players before you can shoot them.":1,
			"Skybase!.":1,
            "Only fishing loot.":1,
			"No using ADS.":1,
			"No shield.":1,
			"You may not use mobility tools.":1,
			"Push every team you are aware of.":1,
			"No communication with your team.":1,
		}

		const drop = {
			"Coral Castle":1,
            "Believer Beach":1,
            "Holly Hedges":1,
            "Stealthy Stronghold":1,
            "Pleasant Park":2,
            "Boney Burbs":2,
            "Weeping Woods":1,
            "Slurpy Swamp":1,
            "Craggy CLiffs":1,
            "Corny Complex":1,
            "Lazy Lake":1,
            "Misty Meadows":1,
            "Steamy Stacks":1,
            "Dirty Docks":1,
            "Retail Row":1,
            "Catty Corner":1,
		}

		//Finally to real code!
	
		var categories = {
			"weapon":2,
			"weaponType":2,
			"inventory":1,
			"interact":1,
			"drop":3,
		}

		generateChallenge(args[0]);

		function generateChallenge(selected) {

			switch (selected) {
				default:
					generateChallenge(get(categories));
					break;
				case "weapon":
					outputChallenge(`You can only use the ${get(weapon)}.`,`${client.emotes.inventory} Inventory`);
					break;
				case "weaponType":
					outputChallenge(`You can only use ${get(weaponType)}.`,`${client.emotes.inventory} Inventory`);
					break;
				case "inventory":
					outputChallenge(`${get(inventory)}`,`${client.emotes.inventory} Inventory`);
					break;
				case "interact":
					outputChallenge(`${get(interact)}`,`${client.emotes.gameplay} Gameplay`);
					break;
				case "drop":
					outputChallenge(`You have to drop at ${get(drop)}.`,`${client.emotes.pin} Drop`);
			}
		}
	}
};