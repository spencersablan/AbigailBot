module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: '#0099ff',
            author: { name: `Here are your search results for ${query}` },
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};