module.exports = {
    name: 'loop',

    async execute(client, interaction) {
        if (!interaction.member.voice.channelId) return await interaction.reply({ content: "❌ | You are not in a voice channel!", ephemeral: true });
        if (interaction.guild.me.voice.channelId && interaction.member.voice.channelId !== interaction.guild.me.voice.channelId) return await interaction.reply({ content: "❌ | You are not in my voice channel!", ephemeral: true });
        const queue = client.player.getQueue(interaction.guildId);
        if (!queue ) return interaction.reply({ content: "❌ | No music is being played!", ephemeral:true });
        
        const loopMode = interaction.options.get("mode").value;
        const success = await queue.setRepeatMode(loopMode)
        const mode = loopMode === 1 ? "🔂" : loopMode === 2 ? "🔁" : "▶";

        return interaction.followUp({ content: success ? `${mode} | Updated loop mode!` : "❌ | Could not update loop mode!" })
    }
}