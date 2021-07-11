const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'apex',
    aliases: ['a'],
    category: 'Fun',
	utilisation: '{prefix}apex < legend, legendType, weapon, weaponType, inventory, interact, drop >',

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

		const legend = {
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
			"Valkyrie":1,
		}

		const legendType = {
			"Attacker":1,
			"Defender":3,
			"Recon":4,
			"Support":3,
		}

		const weapon = {
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
			"Triple Take":2,
			"EVA-8 Auto":1,
			"Mastiff Shotgun":1,
			"Mozambique Shotgun":2,
			"Peacekeeper":1,
			"RE-45 Auto":1,
			"P2020":2,
			"Wingman":1,
			"Bocek Compound Bow":2,
		}

		const weaponType = {
			"Snipers":2,
			"LMGs":1,
			"SMGs":1,
			"Assault Rifles":1,
			"Shotguns":2,
			"Pistols":3,
			"Marksman weapons":2,
		}

		const inventory = {
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

		const interact = {
			"No tactical ability":1,
			"No ultimate ability":1,
			"No using ADS":1,
			"You may not use mobility tools":1,
			"Push every team you are aware of":1,
			"No communication with your team":1,
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
			"Icarus":1,
		}

		const worldsEdge = {
			"Hot Zone":1,
			"Trials":1,
			"Skyhook":1,
			"Countdown":1,
			"Lava Fissure":1,
			"The Train Yard":1,
			"Staging":1,
			"Thermal Station":1,
			"The Tree":1,
			"Sorting Factory":1,
			"Harvester":1,
			"Fragment West":1,
			"Fragment East":1,
			"The Epicenter":1,
			"Survey Camp":1,
			"Refinery":1,
			"Overlook":1,
			"The Geyser":1,
			"Lava City":1,
			"The Dome":1,
			"Launch Site":1,
		}

		//Finally to real code!
		
		const categories = {
			"legend":2,
			"legendType":3,
			"weapon":2,
			"weaponType":2,
			"inventory":1,
			"interact":1,
			"drop":4,
		}

		generateChallenge(args[0]);

		function generateChallenge(selected) {

			switch (selected) {

				default:
					generateChallenge(get(categories));
					break;
				case "legend":
					outputChallenge(`You have to play as ${get(legend)}.`,`${client.emotes.character} Character`);
					break;
				case "class":
					outputChallenge(`Play the round as any ${get(legendType)}.`,`${client.emotes.character} Character`);
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
					outputChallenge(`${get(interact)} while playing as ${get(legend)}`,`${client.emotes.gameplay} Gameplay`);
					break;
				case "drop":
					fetch('https://api.mozambiquehe.re/maprotation?auth=kRcGUSYHry5UthHzscvO')
						.then(res => res.json())
						.then(json => {
							const currentMap = json;

							switch (currentMap.current.map) {

								case "Olympus":
									outputChallenge(`You have to land ${get(olympus)}.`,`${client.emotes.gameplay} Gameplay`);
									break;
								case "World's Edge":
									outputChallenge(`You have to land ${get(worldsEdge)}.`,`${client.emotes.gameplay} Gameplay`);
									break;
								case "Kings Canyon":
									outputChallenge(`You have to land ${get(kingsCanyon)}.`,`${client.emotes.gameplay} Gameplay`)
							}
						})
			}
		}
	}
};