module.exports = {
	name: 'ping',

	async execute(client, interaction) {
		await interaction.reply(`Pong! **${client.ws.ping}ms**`);
	},
};