const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'np',

	async execute(client, interaction) {
		if (!interaction.member.voice.channelId) return await interaction.reply({ content: "❌ | You are not in a voice channel!", ephemeral: true });
        if (interaction.guild.me.voice.channelId && interaction.member.voice.channelId !== interaction.guild.me.voice.channelId) return await interaction.reply({ content: "❌ | You are not in my voice channel!", ephemeral: true });
        const queue = client.player.getQueue(interaction.guildId);
        if (!queue || !queue.playing) return interaction.reply({ content: "❌ | No music is being played!", ephemeral:true });

        const track = queue.current;

        if (track) {
            const np = new MessageEmbed()
                .setTitle(track.title)
                .setURL(track.url)
                .setAuthor(track.author)
                .setThumbnail(track.thumbnail)
                .setDescription(`${queue.createProgressBar()}\n\nRequested by ${track.requestedBy}`);

            interaction.reply({embeds: [np] });
        } else {
            interaction.reply('❌ | There is no song currently playing.');
        }
	}
};