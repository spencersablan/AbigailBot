module.exports = {
	name: 'skip',

	async execute(client, interaction) {
		if (!interaction.member.voice.channelId) return await interaction.reply({ content: "❌ | You are not in a voice channel!", ephemeral: true });
        if (interaction.guild.me.voice.channelId && interaction.member.voice.channelId !== interaction.guild.me.voice.channelId) return await interaction.reply({ content: "❌ | You are not in my voice channel!", ephemeral: true });
        const queue = client.player.getQueue(interaction.guildId);
        if (!queue ) return interaction.reply({ content: "❌ | No music is being played!", ephemeral:true });

        queue.skip()
        interaction.reply('↪️ | Skipped!');
	},
};