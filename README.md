# Abigail-Bot
Discord bot for The Nerd Herd server.

### ⚡ Installation

Start by downloading the code.<br>
Go to the folder `config` then the file `bot.txt`.<br>
For the bot to be able to start, please complete the file with your credentials as follows :

```js
discord: {
    token: 'TOKEN',
}
```

- `token`, the token of the bot available on the [Discord Developers](https://discordapp.com/developers/applications) section.

Rename the file from `bot.txt` to `bot.js.`

In the console, type `npm install` to install all dependencies.

- To start the bot :
```
#With Node
node index.js
npm start #Indicated in package.json

Now start the bot!

### ⚙️ Setup

To register your slash commands, type `!deploy global` in a server your bot is in.
This may take a while, but eventually your commands will be ready to go.

To modify your commands, go to /config/commands.json and modify the information. Remember to use `!deploy test` or `!deploy global` when you are done!

### 👩🏻‍💻 Commands

**Fun Commands**
`/libtard` - Sends a meme from /r/ToiletPaperUSA
`/roll` (Number) - Generate a random number!
`/simp` - Get a picture from Abigail herself!

**Game Commands**
`/apex (Legend, Legend Class, Weapon, Weapon Type, Inventory, Interact, Drop)` - Generate a random Apex Legends challenge!
`/fortnite (Weapon, Weapon Type, Inventory, Interact, Drop)` - Generate a random Fortnite Battle Royale challenge!
`/map` - Find the current Apex Legends maps!

**Information Commands**
`/ping` - Replies with Pong!