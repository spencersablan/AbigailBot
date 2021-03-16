const Discord = require('discord.js');

module.exports = (client, oldState, newState) => {
    var oldUserChannel = oldState.channel
    var newUserChannel = newState.channel

    if(oldUserChannel === null && newUserChannel !== null) {
        if (newState.channel.name != 'Join to Create') return

        newState.guild.channels.create(`${newState.member.user.username}\'s Channel᲼`, { //There is a whitespace character after 'Channel'.
            type: 'voice',
            permissionOverwrites: [
                {
                    type: 'role',
                    id: newState.guild.roles.everyone.id,
                    deny: 1024
                }
            ],
        })
        .catch(error => console.log(newState))
		.then(channel=>{
			channel.setParent(newState.channel.parent)
				.finally(function(){    //move channel in voice category
                    channel.overwritePermissions([
                        {
                            type: 'member',
                            id: newState.member.id,
                            allow: 17825808
                        },
                        {
                            type: 'role',
                            id: newState.guild.roles.everyone.id,
                            allow: 1024
                        }
                    ])
                    .then(() => {newState.setChannel(channel);})
                    .catch(error => console.log(error));
                })
                .catch(error => console.log(error));
		});
    } else if(newUserChannel === null) {
        var vcSize = oldState.channel.members.size
        
        if (vcSize === 0) {
            const whitespace = '᲼';

            if (oldState.channel.name[oldState.channel.name.length - 1] == whitespace) {
                oldState.channel.delete();
            }
        }
    }  
};