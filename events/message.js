const Discord = require('discord.js');

module.exports = (client, message) => {
    if (message.author.bot || message.channel.type === 'dm') return;

    const prefix = client.config.discord.prefix;

    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

	String.prototype.toProperCase = function () {
		return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	};

	if (cmd) {
		if (cmd.permissions) {
			const authorPerms = message.channel.permissionsFor(message.author);
			if (!authorPerms || !authorPerms.has(cmd.permissions)) {
				const needPermsEmbed = new Discord.MessageEmbed()
					.addField(`${client.emotes.error} - ${cmd.name.toProperCase()}`, `You do not have permission to do this!`)
					.setColor('#0099ff');

				return message.reply(needPermsEmbed);
			}
		}
	}

    if (cmd) cmd.execute(client, message, args);
};