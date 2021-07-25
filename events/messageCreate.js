module.exports = async (client, message) => {
	if (!client.application?.owner) await client.application?.fetch();

    if (message.content.toLowerCase() === '!deploy' && message.author.id === client.application.owner.id) {
        const data = [
            {
                name: 'apex',
                description: "Generate a random Apex Legends challenge!",
                options: [{
                    name: 'category',
                    type: 'STRING',
                    description: 'Type of challenge to generate',
                    choices: [
                        {
                            name: 'Legend',
                            value: 'legend'
                        },
                        {
                            name: 'Legend Class',
                            value: 'legendType'
                        },
                        {
                            name: 'Weapon',
                            value: 'weapon'
                        },
                        {
                            name: 'Weapon Type',
                            value: 'weaponType'
                        },
                        {
                            name: 'Inventory',
                            value: 'inventory'
                        },
                        {
                            name: 'Interact',
                            value: 'interact'
                        },
                        {
                            name: 'Drop',
                            value: 'drop'
                        }
                    ]
                }]
            },
            {
                name: 'fortnite',
                description: "Generate a random Fortnite Battle Royale challenge!",
                options: [{
                    name: 'category',
                    type: 'STRING',
                    description: 'Type of challenge to generate',
                    choices: [
                        {
                            name: 'Weapon',
                            value: 'weapon'
                        },
                        {
                            name: 'Weapon Type',
                            value: 'weaponType'
                        },
                        {
                            name: 'Inventory',
                            value: 'inventory'
                        },
                        {
                            name: 'Interact',
                            value: 'interact'
                        },
                        {
                            name: 'Drop',
                            value: 'drop'
                        }
                    ]
                }]
            },
            {
                name: 'libtard',
                description: 'Sends a meme from /r/ToiletPaperUSA!'
            },
            {
                name: 'map',
                description: "Find the current Apex Legends maps!",
            },
            {
                name: 'ping',
                description: 'Replies with Pong!'
            },
            {
                name: 'roll',
                description: "Generate a random number!",
                options: [{
                    name: 'sides',
                    type: 'INTEGER',
                    description: 'How many sides on the die?',
                }]
            },
            {
                name: 'simp',
                description: "Get a picture from Abigail herself!",
            },
        ];

        client.guilds.cache.get('820390858414489640')?.commands.set(data);
        client.application?.commands.set([]);

        //client.guilds.cache.get('820390858414489640')?.commands.set([]);
        //client.application?.commands.set(data);

        message.reply('Success!')
    }
};