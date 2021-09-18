const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'queue',

	async execute(client, interaction) {
		if (!interaction.member.voice.channelId) return await interaction.reply({ content: "❌ | You are not in a voice channel!", ephemeral: true });
        if (interaction.guild.me.voice.channelId && interaction.member.voice.channelId !== interaction.guild.me.voice.channelId) return await interaction.reply({ content: "❌ | You are not in my voice channel!", ephemeral: true });
        const queue = client.player.getQueue(interaction.guildId);
        if (!queue) return interaction.reply({ content: "❌ | No music is being played!", ephemeral:true });

        let page = 1;
        if (interaction.options.getInteger('page')) page = interaction.options.getInteger('page');

        const pageStart = 10 * (page - 1);
        const pageEnd = pageStart + 10;
        const currentTrack = queue.current;
        const tracks = queue.tracks.slice(pageStart, pageEnd).map((m, i) => {
            return `${i + pageStart + 1}. **${m.title}** ([link](${m.url}))`;
        });


        let queueEmbed = new MessageEmbed()
            .setTitle('Music Queue')
            .setDescription(`${tracks.join("\n")}${
                queue.tracks.length > pageEnd ? `\n...${queue.tracks.length - pageEnd} more track(s)`
                : ""
            }`)
            .addFields([{ name: "Now Playing", value: `🎵 | **${currentTrack.title}** ([link](${currentTrack.url}))\n${queue.createProgressBar()}` }]);

        interaction.reply({ embeds: [queueEmbed] });
	}
};