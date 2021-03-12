module.exports = {
    name: 'react',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}react [custom emoji name]',

    execute(client, message, args) {
		const userEmoji = args[0];
		if (message.guild.emojis.cache?.find(emoji => emoji.name == userEmoji) != undefined) {
			const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === userEmoji);
			message.channel.messages
			 .fetch({ limit: 2 })
			 .then((messages) => messages.last().react(reactionEmoji));
		}
		
		message.delete()
		 .catch(console.error);
    },
};