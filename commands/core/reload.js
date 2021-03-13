const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
    name: 'reload',
    aliases: [],
    category: 'Core',
    utilisation: '{prefix}reload [command name]',

    execute(client, message, args) {
        const noInputEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.error} - Reload`, `You must provide a command name to reload.`)
            .setColor('#0099ff');


        if(!args || args.length < 1) return message.reply(noInputEmbed);

		const commandName = args[0].toLowerCase();
		const command = message.client.commands.get(commandName)
			|| message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		if (!command) {
            const noCmdEmbed = new Discord.MessageEmbed()
                .addField(`${client.emotes.error} - Reload`, `There is no command with name or alias \`${commandName}\``)
                .setColor('#0099ff');

			return message.channel.send(noCmdEmbed);
		}

		const commandFolders = fs.readdirSync('./commands');
		const folderName = commandFolders.find(folder => fs.readdirSync(`./commands/${folder}`).includes(`${commandName}.js`));

		delete require.cache[require.resolve(`../${folderName}/${command.name}.js`)];

		try {
			const newCommand = require(`../${folderName}/${command.name}.js`);
			message.client.commands.set(newCommand.name, newCommand);

            const successEmbed = new Discord.MessageEmbed()
                .addField(`${client.emotes.success} - Reload`, `Command \`${command.name}\` was reloaded!`)
                .setColor('#0099ff');

			message.channel.send(successEmbed);
		} catch (error) {
			console.error(error);

            const errorEmbed = new Discord.MessageEmbed()
                .addField(`${client.emotes.error} - Reload`, `There was an error while reloading a command \`${command.name}\`:\n\`${error.message}\``)
                .setColor('#0099ff');

			message.channel.send(errorEmbed);
		}
    },
};