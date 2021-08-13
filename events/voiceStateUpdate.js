const { Discord, Permissions } = require('discord.js');

module.exports = async (client, oldState, newState) => { 
  
    function sleep(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }
    
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
            reason: 'Creating Auto Voice'
        })
        .catch(error => console.log(error))
        .then(channel => {newState.setChannel(channel);})

    }

    if (oldState.channel && oldState.channel.type == 'GUILD_VOICE') {
        if (oldState.channel.members.size === 0) {
            const endChars = '\'s Channel';
            const lastChars = oldState.channel.name.slice(-endChars.length)

            if (lastChars == endChars) {
                (async function init() {
                    const oldChannel = await oldState.client.channels.fetch(oldState.channelId);
                    await sleep(50);
                    if (!oldChannel.deleted) {
                        oldState.channel.delete('Removing Auto Voice');
                    }
                })()
            }
        }
    }  
};