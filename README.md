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

Rename the file from bot.txt to bot.js.

In the console, type `npm install` to install all dependencies.

- To start the bot :
```
#With Node
node index.js
npm start #Indicated in package.json

#With pm2
pm2 start index.js --name "MusicBot"
```

All you have to do is turn on your bot !

### 💡 General commands

```
ping, see the bot latency.
help, see the list of available commands.
react <emoji name>, reacts to the previous message with a custom server emoji.
```

### 🎈 Fun commands

```
apex <character, inventory, gameplay>, creates a random challenge for Apex Legends.
roll <number>, rolls a random number.
simp <user>, DM's a picture of Abigail Shapiro to the tagged user, or the author.
```
### ⚙️ Moderation commands

```
kick <user>, kicks the specified user from the server.
ban <user>, bans the specified user from the server.
clear <0-99>, clears messages from the current chat.
```

### 🎵 Music commands

```
play <name/URL>, play music in a voice channel.
search <name>, open a panel to choose a music and then play it.
pause, pause the current music.
resume, puts the current music back on.
queue, see the next songs.
clear-queue, remove music in the queue.
shuffle, to mix the queue.
nowplaying, see music in progress.
loop, to enable or disable the repeat function.
volume <1 - 100>, change the volume.
skip, skip to next music.
stop, stop all music.
filter <filter>, add / remove filter.
filters, see filters.
```

### 🏓 Utilities (to change the code)

Find all the functions available on the official code [right here](https://github.com/Androz2091/discord-player).

This is used with [discord.js](https://www.npmjs.com/package/discord.js) and [discord-player](https://www.npmjs.com/package/discord-player).
