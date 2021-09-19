module.exports = {
	name: 'play',

	async execute(client, interaction) {
		if (!interaction.member.voice.channelId) return await interaction.reply({ content: "❌ | You are not in a voice channel!", ephemeral: true });
        if (interaction.guild.me.voice.channelId && interaction.member.voice.channelId !== interaction.guild.me.voice.channelId) return await interaction.reply({ content: "❌ | You are not in my voice channel!", ephemeral: true });
        const query = interaction.options.get('query').value;
        let position = interaction.options.getInteger('position');
        const queue = client.player.createQueue(interaction.guild, {
            metadata: {
                channel: interaction.channel
            }
        });
        
        try {
            if (!queue.connection) await queue.connect(interaction.member.voice.channel);
        } catch {
            queue.destroy();
            return await interaction.reply({ content: "❌ | Could not join your voice channel!", ephemeral: true });
        }

        await interaction.deferReply();

        const search = await client.player
            .search(query, {
                requestedBy: interaction.user
            })
            .catch(e => console.log(e));

        if (!search || !search.tracks.length) return void interaction.followUp("❌ | No results were found.");

        if (position == null) {
            await interaction.followUp({ content: `⏱ | Loading your ${search.playlist ? "playlist" : "track"}...` });
            search.playlist ? queue.addTracks(search.tracks) : queue.addTrack(search.tracks[0]);
            if (!queue.playing) await queue.play();

        } else {
            if (search.playlist) {
                interaction.followUp('❌ | Playlists must be added to the end of the queue.')

            } else {
                if (position < 1) position = 1
                interaction.followUp({ content: `⏱ | Loading your track...` });
                queue.insert(search.tracks[0], position - 1);
                if (!queue.playing) await queue.play();

            }
        }
	},
};