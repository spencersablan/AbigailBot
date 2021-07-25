# Abigail-Bot
Discord bot for The Nerd Herd server.

This project is based on:
https://github.com/ZerioDev/Music-bot

### ⚡ Installation

Well, let's start by downloading the code.<br>
Go to the folder `config` then the file `bot.txt`.<br>
For the bot to be able to start, please complete the file with your credentials as follows :

```js
discord: {
    token: 'TOKEN',
    prefix: 'PREFIX',
    activity: 'ACTIVITY',
}
```

- `token`, the token of the bot available on the [Discord Developers](https://discordapp.com/developers/applications) section.
- `prefix`, the prefix that will be set to use the bot.
- `activity`, the activity of the bot.

Rename the file from `bot.txt` to `bot.js.`

In the console, type `npm install` to install all dependencies.

- To start the bot :
```
#With Node
node index.js
npm start #Indicated in package.json

#With pm2
pm2 start index.js --name "MusicBot"
```

All you have to do is turn on your bot!