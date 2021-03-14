const Discord = require('discord.js');

module.exports = {
    name: 'contact',
    aliases: ['suggest','bug','report'],
    category: 'Infos',
    utilisation: '{prefix}contact',
    doNotDm: true,
    private: true,

    execute(client, message) {
        const ogMessage = message

        let contactEmbed = new Discord.MessageEmbed()
            .setColor('0x0099ff')
            .setTitle(`Contact categories`)
            .addField(`Select a category:`, `\n🇦 : Suggest something for the Discord Server\n🇧 : Suggest something for the Abigail Shapiro Bot\n🇨 : Report a bug for the Abigail Shapiro Bot\n🇩 : Report a user in the Discord Server\n🇪 : Something not listed above \n\nReact to this message to continue.`)

        const infoEmbed = new Discord.MessageEmbed()
            .setTitle('Contact')
            .setDescription('Provide further information below, or cancel this command with "cancel"!')
            .setColor('#0099ff');

        const successEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.success} - Success`, `Your suggestion has been sent to the staff team. Thank you!`)
            .setColor('#0099ff');

        const cancelEmbed = new Discord.MessageEmbed()
            .addField(`${client.emotes.off} - Contact`, `Your cancelled your contact request.`)
            .setColor('#0099ff');

        message.channel.send(contactEmbed).then((message) => {
            message.react("🇦").then(() => {
                message.react("🇧").then(() => {
                    message.react("🇨").then(() => {
                        message.react("🇩").then(() => {
                            message.react("🇪").then(() => {
                                message.react(client.emotes.off).then(() => {
                                    
                                    const filter = (reaction, user) => {
                                        return ['🇦', '🇧', '🇨', '🇩', '🇪', `fail`].includes(reaction.emoji.name) && user.id;
                                    };
                                    
                                    message.awaitReactions(filter, { max:1 }).then(collected => {
                                    
                                        const reaction = collected.first();
                                        
                                        if (reaction.emoji.name === '🇦') {
                                    
                                            message.channel.send(infoEmbed).then(() => {
                                                
                                                const filter = m => m.author.id === ogMessage.author.id
                                                
                                                message.channel.awaitMessages(filter, { max: 1, })
                                                .then(async (collected) => {
                                                    if (collected.first().content.toLowerCase() === 'cancel') {
                                                        message.channel.send(cancelEmbed)
                                                    } else {
                                                        let embed1 = new Discord.MessageEmbed()
                                                            .setColor('0x0099ff')
                                                            .addField(`Discord Suggestion:`, `${collected.first().content}`)
                                                            .setFooter(`${ogMessage.author.tag}`)
                                                            .setTimestamp();

                                                        const channel = await client.channels.fetch(client.setChannels.discordSuggestions)
                                                        channel.send(embed1)
                                    
                                                        message.channel.send(successEmbed)
                                                    } 
                                                })
                                            })
                                        }
                                        if (reaction.emoji.name === '🇧') {
                                    
                                            message.channel.send(infoEmbed).then(() => {
                                                
                                                const filter = m => m.author.id === ogMessage.author.id
                                    
                                                message.channel.awaitMessages(filter, { max: 1, })
                                                .then(async (collected) => {
                                                    if (collected.first().content.toLowerCase() === 'cancel') {
                                                        message.channel.send(cancelEmbed)
                                                    } else {
                                                        let embed2 = new Discord.MessageEmbed()
                                                            .setColor('0x0099ff')
                                                            .addField(`Bot Suggestion:`, `${collected.first().content}`)
                                                            .setFooter(`${ogMessage.author.tag}`)
                                                            .setTimestamp();
                                    
                                                        const channel = await client.channels.fetch(client.setChannels.botSuggestions)
                                                        channel.send(embed2)
                                    
                                                        message.channel.send(successEmbed)
                                                    }
                                                })
                                            })
                                        }
                                        if (reaction.emoji.name === '🇨') {
                                    
                                            message.channel.send(infoEmbed).then(() => {
                                                
                                                const filter = m => m.author.id === ogMessage.author.id
                                    
                                                message.channel.awaitMessages(filter, { max: 1, })
                                                .then(async (collected) => {
                                                    if (collected.first().content.toLowerCase() === 'cancel') {
                                                        message.channel.send(cancelEmbed)
                                                    } else {
                                                        let embed2 = new Discord.MessageEmbed()
                                                            .setColor('0x0099ff')
                                                            .addField(`Bot Bug Report:`, `${collected.first().content}`)
                                                            .setFooter(`${ogMessage.author.tag}`)
                                                            .setTimestamp();
                                    
                                                        const channel = await client.channels.fetch(client.setChannels.botBugReports)
                                                        channel.send(embed2)
                                    
                                                        message.channel.send(successEmbed)
                                                    }
                                                })
                                            })
                                        }
                                        if (reaction.emoji.name === '🇩') {
                                    
                                            message.channel.send(infoEmbed).then(() => {
                                                
                                                const filter = m => m.author.id === ogMessage.author.id
                                    
                                                message.channel.awaitMessages(filter, { max: 1, })
                                                .then(async (collected) => {
                                                    if (collected.first().content.toLowerCase() === 'cancel') {
                                                        message.channel.send(cancelEmbed)
                                                    } else {
                                                        let embed2 = new Discord.MessageEmbed()
                                                            .setColor('0x0099ff')
                                                            .addField(`User Report:`, `${collected.first().content}`)
                                                            .setFooter(`${ogMessage.author.tag}`)
                                                            .setTimestamp();
                                    
                                                        const channel = await client.channels.fetch(client.setChannels.userReports)
                                                        channel.send(embed2)
                                    
                                                        message.channel.send(successEmbed)
                                                    }
                                                })
                                            })
                                        }
                                        if (reaction.emoji.name === '🇪') {
                                    
                                            message.channel.send(infoEmbed).then(() => {
                                                
                                                const filter = m => m.author.id === ogMessage.author.id
                                    
                                                message.channel.awaitMessages(filter, { max: 1, })
                                                .then(async (collected) => {
                                                    if (collected.first().content.toLowerCase() === 'cancel') {
                                                        message.channel.send(cancelEmbed)
                                                    } else {
                                                        let embed2 = new Discord.MessageEmbed()
                                                            .setColor('0x0099ff')
                                                            .addField(`Other Contact:`, `${collected.first().content}`)
                                                            .setFooter(`${ogMessage.author.tag}`)
                                                            .setTimestamp();
                                    
                                                        const channel = await client.channels.fetch(client.setChannels.otherContact)
                                                        channel.send(embed2)
                                    
                                                        message.channel.send(successEmbed)
                                                    }
                                                })
                                            })
                                        }
                                        if (reaction.emoji.name === 'fail') {
                                            message.channel.send(cancelEmbed)
                                        }
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }
}