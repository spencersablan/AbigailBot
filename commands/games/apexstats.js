const { MessageEmbed } = require('discord.js');
const { ApexUsers } = require('../../index.js')
const fetch = require('node-fetch');

module.exports = {
    name: 'apexstats',

    execute(client, interaction) {
		async function apexSet(id, username, platform) {
			const newUser = await ApexUsers.upsert({ user_id: id, username: username, platform: platform });
			return newUser;
		}

		async function apexSearch(user_id) {
			const aUser = await ApexUsers.findAll({ where: { user_id: user_id } })
			if (!aUser[0]) return 'User does not have an account set!'
			return aUser[0].dataValues
		}

		async function output(username, platform) {
			interaction.deferReply()

			function trackers(data) {
				let items = []

				for (i=0; i < data.length; i++) {
					const item = data[i]
					if (item.rank) {
						items.push(`${item.name} : ${item.value} - Top ${item.rank.topPercent}% of players!`)
					} else {
						items.push(`${item.name} : ${item.value}`)
					}
				}
				return items.join('\n')
			}

			function percentBar(percentIn, number) {
				let percent = Math.round((percentIn / 100) * number);

				let percentBar = []
				for (i=0; i < number; i++) {
					if (i <= percent) { percentBar.push ('▆') } else { percentBar.push('▁')}
				}

				return percentBar.join('')
			}

				fetch(`https://api.mozambiquehe.re/bridge?version=5&platform=${platform}&player=${username}&auth=${client.apiKeys.mozambiquehere}`)
				//fetch('https://thegooddude22.github.io/test')
					.then(res => res.json())
					.then(json => {
						if (!json.Error) {
							const apexEmbed = new MessageEmbed()
							.setTitle(`${json.global.name}\'s Stats (${json.global.platform})`)
							.setURL(`https://apexlegendsstatus.com/profile/${platform}/${username}`)
							.setDescription(`${json.realtime.currentStateAsText}\nLevel ${json.global.level} [${percentBar(json.global.toNextLevelPercent, 8)}]`)
							.setThumbnail(json.global.rank.rankImg)
							.addFields(
								{ name: '**Ranked**', value: `${json.global.rank.rankName} ${json.global.rank.rankDiv}`, inline: true},
								{ name: '**Arenas**', value: `${json.global.arena.rankName} ${json.global.arena.rankDiv}`, inline: true},
								{ name: `**${json.legends.selected.LegendName}**`, value: `${trackers(json.legends.selected.data)}`, inline: false}
							)

							interaction.editReply({ embeds: [apexEmbed] });
						} else {
							interaction.editReply(json.Error)
						}
					})
		}

		if (interaction.options.getSubcommandGroup() == 'search') {

			if (interaction.options.getSubcommand() == 'user') {
				const target = interaction.options.getUser('player') ?? interaction.user;
				apexSearch(target.id)
					.then(dbOutput => {
						if (typeof dbOutput === 'string') {
							interaction.reply(dbOutput)
						} else {
							output(dbOutput.username, dbOutput.platform)
						}
					})
			}

			if (interaction.options.getSubcommand() == 'name') {
				output(interaction.options.getString('player'), interaction.options.getString('platform'))
			}
		}

		if (interaction.options.getSubcommandGroup() == 'link') {

			if (interaction.options.getSubcommand() == 'set') {
				const target = interaction.user;

				apexSet(target.id, interaction.options.getString('username'), interaction.options.getString('platform'));
				interaction.reply(`Set to ${interaction.options.getString('username')} (${interaction.options.getString('platform')})`);
			}

			if (interaction.options.getSubcommand() == 'remove') {
				(async function removeAcc() {
					const target = interaction.user;

					var aFiltered = [];
					for (var i = (aUsers.length - 1) ; i >= 0; i--) {
						if (aUsers[i].type === "button") {
							aFiltered.push(aUsers[i]);
						}
					}
					aUsers = aFiltered;

					const rowCount = await ApexUsers.destroy({ where: { user_id: target.id } });
					if (!rowCount) return interaction.reply('You don\'t have an account set!');
	
					interaction.reply('Account removed.');
				})()
			}
		}
	}
};