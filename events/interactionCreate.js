const Discord = require('discord.js');

module.exports = (client, interaction) => {
	if (interaction.isCommand()) {
		if (!client.commands.has(interaction.commandName)) return;

		let cmd = client.commands.get(interaction.commandName)

		if (cmd.permissions) {
			const authorPerms = interaction.channel.permissionsFor(interaction.member);
			if (!authorPerms || !authorPerms.has(cmd.permissions)) {
				return interaction.reply({content: 'You do not have permission to do this!', ephemeral: true});
			}
		}

		try {
			client.commands.get(interaction.commandName).execute(client, interaction);
		} catch (error) {
			console.error(error);
			interaction.reply({ content: 'There was an error executing this command!', ephemeral: true });
		}
	}
};