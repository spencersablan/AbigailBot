const { Discord, Permissions } = require('discord.js');

module.exports = async (client, oldState, newState) => {

    if(newState.channel && newState.channel.name == 'Join to Create' && newState.channel.type == 'GUILD_VOICE') {

        newState.guild.channels.create(`${newState.member.user.username}\'s Channel`, {
            type: 'GUILD_VOICE',
            parent: newState.channel.parent,
            permissionOverwrites: [
                {
                    id: newState.member.id,
                    allow: [
                        Permissions.FLAGS.DEAFEN_MEMBERS,
                        Permissions.FLAGS.MUTE_MEMBERS,
                        Permissions.FLAGS.MOVE_MEMBERS,
                    ],
                },
            ],
            reason: 'Auto Voice Channels'
        })
        .catch(error => console.log(error))
        .then(channel => {newState.setChannel(channel);})

    } else if(newState.channel === null && oldState.channel.type == 'GUILD_VOICE') {

        var vcSize = oldState.channel.members.size
        
        if (vcSize === 0) {
            const endChars = '’s Channel';
            const lastChars = endChars.slice(endChars.length - 10)

            if (lastChars == endChars) {
                oldState.channel.delete();
            }
        }
    }  
};