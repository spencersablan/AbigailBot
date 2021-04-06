const Discord = require('discord.js');

module.exports = (client, oldState, newState) => {
    var oldUserChannel = oldState.channel
    var newUserChannel = newState.channel

    if(oldUserChannel === null && newUserChannel !== null) {
        if (newState.channel.name != 'Join to Create') return

        newState.guild.channels.create(`${newState.member.user.username}\’s Channel`, {
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
                            allow: 17825792
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

        console.log(oldState.channel);
        if (oldState.channel !== null) { //Makes sure channel is not a stage channel.
            var vcSize = oldState.channel.members.size
        
            if (vcSize === 0) {
                const endChars = '’s Channel';
                const lastChars = endChars.slice(endChars.length - 10)
    
                if (lastChars == endChars) {
                    oldState.channel.delete();
                }
            }

        }
    }  
};