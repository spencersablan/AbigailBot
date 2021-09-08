const { MessageEmbed } = require('discord.js');
const fs = require('fs');
const openAI = require('openai-nodejs');

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

    if (message.content.toLowerCase() === '!rules' && message.author.id === client.application.owner.id) {
       
        const rulesEmbed = new MessageEmbed()
        .setTitle('Basics')
        .setDescription('No uncivil or rude comments.\nThe mods are always right.\nNo inappropriate or unsuitable content.\nUse common sense!')
        .setImage('https://i.stack.imgur.com/Fzh0w.png')
        
        const rule1 = new MessageEmbed()
        .setTitle('**Rule 1 - :smiley: Be Kind and Civil**')
        .setDescription('Treat all members with respect. Be kind and contructive.')
        .setImage('https://i.stack.imgur.com/Fzh0w.png')
        
        const rule2 = new MessageEmbed()
        .setTitle('**Rule 2 - :stop_sign: Obey the Mods**')
        .setDescription('Moderators are here for a reason. You must comply with their requests.')
        .setImage('https://i.stack.imgur.com/Fzh0w.png')
        
        const rule3 = new MessageEmbed()
        .setTitle('**Rule 3 - :anger_right: No Hate Speech**')
        .setDescription('No racist, sexist, anti LGBTQ+, or otherwise offensive content. Hate speech has no place here.')
        .setImage('https://i.stack.imgur.com/Fzh0w.png')
        
        const rule4 = new MessageEmbed()
        .setTitle('**Rule 4 - :head_bandage: No Harrassment**')
        .setDescription('There is no tolerance for harming or bullying others.')
        .setImage('https://i.stack.imgur.com/Fzh0w.png')
        
        const rule5 = new MessageEmbed()
        .setTitle('**Rule 5 - :rotating_light: No Inappropriate Content**')
        .setDescription('Your username, avatar, messages, images, and voice activity should be appropriate. We do not condone illegal activities.')
        .setImage('https://i.stack.imgur.com/Fzh0w.png')
        
        const rule6 = new MessageEmbed()
        .setTitle('**Rule 6 - :incoming_envelope: No Spam**')
        .setDescription('Avoid excessive messages, formatting, commands, emoji, and mentions. Self-promotion falls into this category.')
        .setImage('https://i.stack.imgur.com/Fzh0w.png')
        
        const rule7 = new MessageEmbed()
        .setTitle('**Rule 7 - :shield: No Personal Information**')
        .setDescription('Protect the privacy of yourself and others.')
        .setImage('https://i.stack.imgur.com/Fzh0w.png')
        
        const rule8 = new MessageEmbed()
        .setTitle('**Rule 8 - :classical_building: No Political or Religious Topics**')
        .setDescription('Complex subjects tend to result in controversial, offensive, and harmful content.')
        .setImage('https://i.stack.imgur.com/Fzh0w.png')
        
        const rule9 = new MessageEmbed()
        .setTitle('**Rule 9 - :thinking: Use Common Sense**')
        .setDescription('These rules are not comprehensive. Use of loopholes to violate the spirit of the rules is subject to enforcement.')
        .setImage('https://i.stack.imgur.com/Fzh0w.png')
        
        const rule10 = new MessageEmbed()
        .setTitle('**Rule 10 - :scroll: Discord Terms of Service and Community Guidelines Apply**')
        .setDescription('You must be 13 years or older to use Discord, and abide by all other terms and guidelines. [Terms of Service](https://discord.com/terms), [Community Guidelines](https://discord.com/guidelines)')
        .setImage('https://i.stack.imgur.com/Fzh0w.png')
        
        message.channel.send({ embeds: [rulesEmbed]} )
        message.channel.send({ embeds: [rule1, rule2, rule3, rule4, rule5, rule6, rule7, rule8, rule9, rule10] } )
    }

    //the following two are only for a limited time. crash shouldn'y be necessary but i got scared for some reason and had to implement it.
    
    if (message.mentions.has(client.user) && !message.author.bot) {
        const clientAI = new openAI(client.apiKeys.openAI)
        var prompt = `Abigail:Hello sweety! How are you?\nHuman:I'm doing great, thanks!\nAbigail:That's amazing to hear, hun!\nHuman:${message.content.substring(0,50)}\nAbigail:`
        clientAI.complete(prompt, {stop: ['\n'], temperature: 0.7, echo: false, max_tokens: 15})
        .then(completion => {
            message.reply(completion.choices[0].text)
        })
        .catch(console.error);
    }

    if (message.content.toLowerCase() === '!crash' && message.author.id === client.application.owner.id) {
        const crash = require('burn');
    }
};