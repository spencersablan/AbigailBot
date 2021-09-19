module.exports = {
	name: 'seek',

	async execute(client, interaction) {
		if (!interaction.member.voice.channelId) return await interaction.reply({ content: "❌ | You are not in a voice channel!", ephemeral: true });
        if (interaction.guild.me.voice.channelId && interaction.member.voice.channelId !== interaction.guild.me.voice.channelId) return await interaction.reply({ content: "❌ | You are not in my voice channel!", ephemeral: true });
        const queue = client.player.getQueue(interaction.guildId);
        if (!queue ) return interaction.reply({ content: "❌ | No music is being played!", ephemeral:true });

        const time = interaction.options.get('time').value

        function hmsToSecondsOnly(str) {
            var p = str.split(':'),
                s = 0, m = 1;
        
            while (p.length > 0) {
                s += m * parseInt(p.pop(), 10);
                m *= 60;
            }
        
            return s;
        }

        const secTime = hmsToSecondsOnly(time);

        await queue.seek(secTime * 1000)
        interaction.reply(`↪️ | Jumped to ${time}!`);
	},
};