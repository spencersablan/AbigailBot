module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const fun = message.client.commands.filter(x => x.category == 'Fun').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');
			const moderation = message.client.commands.filter(x => x.category == 'Moderation').map((x) => '`' + x.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: '#0099ff',
                    author: { name: 'Help pannel' },
                    fields: [
                        { name: 'Bot', value: infos },
                        { name: 'Fun', value: fun },
						{ name: 'Moderation', value: moderation },
                        { name: 'Music', value: music },
                    ],
                    description: `For more information, use ${client.config.discord.prefix}help (the command). Example : ${client.config.discord.prefix}help ping.`,
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - I did not find this command !`);

            message.channel.send({
                embed: {
                    color: '#0099ff',
                    author: { name: 'Help pannel' },
                    fields: [
                        { name: 'Name', value: command.name, inline: true },
                        { name: 'Category', value: command.category, inline: true },
                        { name: 'Aliase(s)', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                        { name: 'Utilisation', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: 'Find information on the command provided.\nMandatory arguments `[]`, optional arguments `<>`.',
                }
            });
        };
    },
};