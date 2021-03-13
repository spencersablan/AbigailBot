const Discord = require('discord.js');

module.exports = {
    name: 'apex',
    aliases: ['a'],
    category: 'Fun',
	utilisation: '{prefix}apex <character, inventory, gameplay>',

    execute(client, message, args) {
		function outputChallenge(chalText,chalCat) {
			const outputEmbed = new Discord.MessageEmbed()
				.setTitle('Apex Challenge')
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

		const specificCharacter = {
			"Bloodhound":2,
			"Gibraltar":3,
			"Lifeline":3,
			"Pathfinder":1,
			"Wraith":3,
			"Bangalore":3,
			"Caustic":2,
			"Mirage":1,
			"Octane":1,
			"Wattson":2,
			"Crypto":1,
			"Revenant":1,
			"Loba":2,
			"Rampart":2,
			"Horizon":2,
			"Fuse":1,
		}

		const broadCharacter = {
			"Attacker":1,
			"Defender":3,
			"Recon":4,
			"Support":3,
		}

		const classWeapon = {
			"Snipers":2,
			"LMGs":1,
			"SMGs":1,
			"Assault Rifles":1,
			"Shotguns":2,
			"Pistols":3,
		}

		const specificWeapon = {
			"Havoc rifle":2,
			"VK-47 Flatline":1,
			"G7 Scout":1,
			"Hemlok Burst AR":1,
			"R-301 Carbine":2,
			"30-30 Repeater":2,
			"Alternator SMG":1,
			"Prowler Burst PDW":2,
			"R-99 SMG":1,
			"Volt SMG":1,
			"Devotion LMG":1,
			"M600 Spitfire":1,
			"L-STAR EMG":2,
			"Charge Rifle":2,
			"Longbow DMR":1,
			"Kraber .50-Cal Sniper":2,
			"Sentinel":1,
			"Triple Take":1,
			"EVA-8 Auto":1,
			"Mastiff Shotgun":1,
			"Mozambique Shotgun":2,
			"Peacekeeper":2,
			"RE-45 Auto":1,
			"P2020":2,
			"Wingman":1,
		}

		const otherInventory = {
			"You can only use 1 gun.":1,
			"No guns allowed. You may use grenades and your fists.":1,
			"Only use a single ammo type.":1,
			"No weapon attachments, including legendary guns.":1,
			"No backpack.":1,
			"No shield.":1,
			"No health regeneration, including from legends.":1,
			"No shield healing. Armor swap only!":1,
			"Level 2 and below gear.":1,
			"Supply bins only, no floor loot or death boxes.":1,
			"Floor loot only, no death boxes or supply bins.":1,
			"Death boxes only, no supply bins or floor loot.":1,
		}

		const kingsCanyon = {
			"Hot Zone":5,
			"Dropship":3,
			"Crash Site":1,
			"Artillery":1,
			"Broken Relay":1,
			"The Rig":1,
			"Capacitor":1,
			"Swamps":1,
			"Labs":1,
			"Hydro Dam":1,
			"Repulsor":1,
			"The Cage":1,
			"Caustic Treatment":1,
			"Market":1,
			"Salvage":1,
			"Gauntlet":1,
			"Airbase":1,
			"Bunker":1,
			"Runoff":1,
			"The Pit":1,
			"Containment":1,
			"Spotted Lake":1,
		}

		const olympus = {
			"Hot Zone":5,
			"Fight Night":3,
			"Elysium":1,
			"Hydroponics":1,
			"Estates":1,
			"Oasis":1,
			"Carrier":1,
			"Docks":1,
			"Power Grid":1,
			"Turbine":1,
			"Hammond Labs":1,
			"Solar Array":1,
			"Bonsai Plaza":1,
			"Orbital Cannon":1,
			"Grow Towers":1,
			"Gardens":1,
			"Rift":1,
		}

		const gameplayInteract = {
			"No tactical ability":1,
			"No ultimate ability":1,
			"No using ADS":1,
			"You may not use mobility tools":1,
			"Push every team you are aware of":1,
			"No communication with your team":1,
		}

		//Finally to real code!

		const chosenCategory = args[0];
		
		var overallCategory = {
			"character":2,
			"inventory":2,
			"gameplay":1
		}

		if (['character','inventory','gameplay'].includes(chosenCategory)) {
			var selected = chosenCategory
		} else {
			var selected = get(overallCategory);
		}

		if (selected === "character") {	
            const character = {
                "specificCharacter":1,
                "broadCharacter":1,
            }

			if (get(character) === "specificCharacter") {
				outputChallenge(`You have to play as ${get(specificCharacter)}.`,`${client.emotes.character} Character`);
			} else {
				outputChallenge(`Play the round as any ${get(broadCharacter)}.`,`${client.emotes.character} Character`);
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
            const gameplay = {
				"drop":3,
				"interact":1,
			}
			
			if (get(gameplay) === "drop") {
				const fetch = require('node-fetch');

				fetch('https://api.mozambiquehe.re/maprotation?auth=kRcGUSYHry5UthHzscvO')
                    .then(res => res.json())
                    .then(json => {
                        const currentMap = json;
                        if (currentMap.current.map === "Kings Canyon") {
                            outputChallenge(`You have to land ${get(kingsCanyon)}.`,`${client.emotes.gameplay} Gameplay`);
                        } else {
                            outputChallenge(`You have to land ${get(olympus)}.`,`${client.emotes.gameplay} Gameplay`);
                        }
                    })	
			} else {
				outputChallenge(`${get(gameplayInteract)} while playing as ${get(specificCharacter)}`,`${client.emotes.gameplay} Gameplay`);
			}
		}
	}
};