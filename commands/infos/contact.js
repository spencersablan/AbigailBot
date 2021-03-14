const Discord = require('discord.js');
const { strike } = require('ffmpeg-static');

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
            message.react('🇦')
            .then(() => message.react('🇧'))
            .then(() => message.react('🇨'))
            .then(() => message.react('🇩'))
            .then(() => message.react('🇪'))
            .then(() => message.react(client.emotes.off))
            .then(() => {
                const offEmote = client.emotes.off.split(':')[1];

                const filter = (reaction, user) => {
                    return ['🇦', '🇧', '🇨', '🇩', '🇪', offEmote].includes(reaction.emoji.name) && user.id;
                };
        
                message.awaitReactions(filter, { max:1 })
                    .then(collected => {                     
                    const reaction = collected.first();

                    if (reaction.emoji.name === offEmote) {
                        message.channel.send(cancelEmbed)
                    } else {
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
        
                                    if (reaction.emoji.name === '🇦') {
                                        var channel = await client.channels.fetch(client.setChannels.discordSuggestions);
                                    } else if (reaction.emoji.name === '🇧') {
                                        var channel = await client.channels.fetch(client.setChannels.botSuggestions);
                                    } else if (reaction.emoji.name === '🇨') {
                                        var channel = await client.channels.fetch(client.setChannels.botBugReports);
                                    } else if (reaction.emoji.name === '🇩') {
                                        var channel = await client.channels.fetch(client.setChannels.userReports);
                                    } else if (reaction.emoji.name === '🇪') {
                                        var channel = await client.channels.fetch(client.setChannels.otherContact);
                                    }
                                    channel.send(embed1)
                
                                    message.channel.send(successEmbed)
                                } 
                            })
                        })
                    }
                })
            })
        })
    }
}