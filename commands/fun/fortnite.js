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

		const namedPois = {
			"Coral Castle":1,
            "Sweaty Sands":1,
            "Holly Hedges":1,
            "Stealthy Stronghold":1,
            "Pleasant Park":2,
            "Boney Burbs":2,
            "Weeping Woods":1,
            "Slurpy Swamp":1,
            "Craggy CLiffs":1,
            "Colossal Crops":1,
            "The Spire":2,
            "Lazy Lake":1,
            "Misty Meadows":1,
            "Steamy Stacks":1,
            "Dirty Docks":1,
            "Retail Row":1,
            "Catty Corner":1,
		}
		const classWeapon = {
			"Bows":2,
			"SMGs":1,
			"Assault Rifles":1,
			"Shotguns":2,
			"Pistols":3,
            "Throwables":1,
            "Exotics":1,
		}

		const specificWeapon = {
			"Makeshift Rifle":1,
            "Primal Rifle":2,
            "Assault Rifle":1,
            "Makeshift Shotgun":1,
            "Primal Shotgun":1,
            "Pump Shotgun":1,
            "Makeshift SMG":1,
            "Primal SMG":1,
            "Submachine Gun":1,
            "Makeshift Revolver":1,
            "Primal Pistol":1,
            "Revolver":1,
            "Rocket Launcher":2,
            "Makeshift Bow":2,
            "Primal Bow":1,
            "Primal Flame Bow":1,
            "Primal Stink Bow":1,
            "Mechanical Bow":1,
            "Mechanical Explosive Bow":1,
            "Mechanical Shockwave Bow":1,
            "Harpoon Gun":2,
			"Recycler":2,
		}

		const otherInventory = {
			"You can only use 1 gun.":1,
			"No guns allowed. You may use throwables and your pickaxe.":1,
			"Only use a single ammo type.":1,
			"No crafting or upgrading.":1,
			"No 2 inventory slots.":1,
			"No shield.":1,
			"No health regeneration.":1,
			"Uncommon and below gear.":1,
			"Chests only, no floor loot or death looting.":1,
			"Floor loot only, no death looting or chests.":1,
			"Death looting only, no chests or floor loot.":1,
		}

		const gameplayInteract = {
			"No building":1,
			"No shooting":1,
            "Only fishing loot":1,
			"No using ADS":1,
			"You may not use mobility tools":1,
			"Push every team you are aware of":1,
			"No communication with your team":1,
		}

		//Finally to real code!

		const chosenCategory = args[0];
		
		var overallCategory = {
			"drop":2,
			"inventory":2,
			"gameplay":1
		}

		if (['drop','inventory','gameplay'].includes(chosenCategory)) {
			var selected = chosenCategory
		} else {
			var selected = get(overallCategory);
		}

		if (selected === "drop") {	
            const drop = {
                "namedPois":1,
                "unnamedPois":0,
            }

			if (get(drop) === "namedPois") {
				outputChallenge(`You have to drop at ${get(namedPois)}.`,`${client.emotes.pin} Drop`);
			}
		}
		
		if (selected === "inventory") {
            const inventory = {
                "classWeapon":3,
                "specificWeapon":1,
                "otherInventory":2,
            }

			const inventorySelected = get(inventory);
			
			if (inventorySelected === "classWeapon") {
				outputChallenge(`You can only use ${get(classWeapon)}.`,`${client.emotes.inventory} Inventory`);
			} else if (inventorySelected === "specificWeapon") {
				outputChallenge(`You can only use the ${get(specificWeapon)}.`,`${client.emotes.inventory} Inventory`);
			} else if (inventorySelected === "otherInventory") {
				outputChallenge(`${get(otherInventory)}`,`${client.emotes.inventory} Inventory`);
			}
		}
		
		if (selected === "gameplay") {
            outputChallenge(`${get(gameplayInteract)}`,`${client.emotes.gameplay} Gameplay`);
		}
	}
};