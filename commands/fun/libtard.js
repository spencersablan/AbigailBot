const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'libtard',
    aliases: ['tpusa'],
    category: 'Fun',
	utilisation: '{prefix}libtard <number>',

    execute(client, message, args) {
		const amount = parseInt(args[0]);

        (function loop() {
            fetch('https://www.reddit.com/r/toiletpaperusa/random.json')
            .then(res => res.json())
            .then(json => {
                const inputJson = json;

                if (inputJson[0].data.children[0].data.post_hint === 'image') {
                    var outputMeme = new Discord.MessageEmbed()
                        .setTitle(`${inputJson[0].data.children[0].data.title}`)
                        .setURL(`https://www.reddit.com${inputJson[0].data.children[0].data.permalink}`)
                        .setImage(inputJson[0].data.children[0].data.url_overridden_by_dest)
                        .setColor('#0099ff');

                    message.channel.send(outputMeme);
                } else {
                    loop();
                };
            })
        }());
	}
};