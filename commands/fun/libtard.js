const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'libtard',

    async execute(client, interaction) {
        interaction.deferReply();

        (function loop() {
            fetch('https://www.reddit.com/r/toiletpaperusa/random.json')
            .then(res => res.json())
            .then(json => {
                const inputJson = json;

                if (inputJson[0].data.children[0].data.post_hint === 'image') {
                    var outputMeme = new Discord.MessageEmbed()
                        .setTitle(inputJson[0].data.children[0].data.title.substring(0, 100))
                        .setURL(`https://www.reddit.com${inputJson[0].data.children[0].data.permalink}`)
                        .setImage(inputJson[0].data.children[0].data.url_overridden_by_dest)
                        .setColor('#0099ff')

                    interaction.editReply({embeds: [outputMeme]});
                } else {
                    loop();
                }
            })
        }())
	}
};