const fs = require('fs');
const Discord = require('discord.js');
const { Client, Intents, MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js');

const client = new Client({ intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_INTEGRATIONS'] });

client.config = require('./config/bot');
client.apiKeys = client.config.apiKeys;
client.servers = client.config.servers;
client.commands = new Discord.Collection();

fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        //console.log(`Loading command ${file}`);
        client.commands.set(command.name.toLowerCase(), command);
    };
});

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of events) {
    const event = require(`./events/${file}`);
    //console.log(`Loading discord.js event ${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

client.login(client.config.discord.token);