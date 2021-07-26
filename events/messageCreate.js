const fs = require('fs');

module.exports = async (client, message) => {
	if (!client.application?.owner) await client.application?.fetch();

    if (message.content.toLowerCase() === '!deploy global' && message.author.id === client.application.owner.id) {
        fs.readFile('./config/commands.json', 'utf8', function(err,data) {
            if (err) {
                return console.log(err);
            }

            client.application.commands.set(JSON.parse(data));
        })
        message.reply('commands.json sent to all')
    }

    if (message.content.toLowerCase() === '!deploy test' && message.author.id === client.application.owner.id) {
        fs.readFile('./config/commands.json', 'utf8', function(err,data) {
            if (err) {
                return console.log(err);
            }

            client.guilds.cache.get(client.servers.testServer)?.commands.set(JSON.parse(data));
        })
        message.reply('commands.json sent to test server')
    }

    if (message.content.toLowerCase() === '!remove global' && message.author.id === client.application.owner.id) {
        fs.readFile('./config/commands.json', 'utf8', function(err,data) {
            if (err) {
                return console.log(err);
            }

            client.application.commands.set([]);
        })
        message.reply('integrations removed from all')
    }

    if (message.content.toLowerCase() === '!remove test' && message.author.id === client.application.owner.id) {
        fs.readFile('./config/commands.json', 'utf8', function(err,data) {
            if (err) {
                return console.log(err);
            }

            client.guilds.cache.get(client.servers.testServer)?.commands.set([]);
        })
        message.reply('integrations removed from test server')
    }
};