# Abigail-Bot

[![CodeQL](https://github.com/TheGoodDude22/AbigailBot/actions/workflows/codeql-analysis.yml/badge.svg?branch=master)](https://github.com/TheGoodDude22/AbigailBot/actions/workflows/codeql-analysis.yml)

### ⚡ Installation

This guide assumes you have [Node.JS](https://nodejs.org/) installed. Ensure you are using v16.6.0  or higher for  Discord.JS to work correctly. You can run `node -v`  in the terminal to check your version.

1. Start by downloading the code.
2. Go to the folder `config` then the file `bot.txt`.<br>
    - For the bot to be able to start, please complete the file with your credentials as follows :
        ```js
        discord: {
            token: 'TOKEN'
        }
        ```
        `token`, the token of the bot available on the [Discord Developers](https://discordapp.com/developers/applications) section.

        ```js
        servers: {
            testServer: 'SERVER ID'
        }
        ```
        `testServer`, the guild id of a server to test the bot. This is the server used to test slash commands.

3. Rename the file from `bot.txt` to `bot.js.`
4. In the console, type `npm install` to install all dependencies.
5. If you don't have a `database.sqlite` file in your directory, type `node dbInit.js`.
6. Now start the bot with `node index.js`!
    - This is the only command needed to run the bot in the future.

### ⚙️ Setup

1. Invite your bot to a server. You can do this in the OAuth2 section of your bot on the [Discord Developers](https://discordapp.com/developers/applications) site.
    - Make sure `bot` and `applications.commands` are enabled.
    - If it is a private bot, feel free to put the bot permissions to Administrator.
2. To register your slash commands, type `!deploy test` or `!deploy global` in a server your bot is in.
    - `!deploy test` will add the slash commands to your test server instantly.
    - `!deploy global` will add them when Discord next caches them, and may take up to hour.
3. To modify your commands, go to /config/commands.json and modify the information.
    - Remember to use `!deploy test` or `!deploy global` when you are done!

### 👩🏻‍💻 Commands

**Fun Commands**
- `/libtard` - Sends a meme from /r/ToiletPaperUSA

- `/roll` (Number) - Generate a random number!

- `/simp` - Get a picture from Abigail herself!

**Game Commands**
- `/apex (Legend, Legend Class, Weapon, Weapon Type, Inventory, Interact, Drop)` - Generate a random Apex Legends challenge!

- `/apexstats`
    > `search`
    > > `user (member)` - Get the Apex Stats of a discord user!
    > 
    > > `name [username] [platform]` - Get the Apex Stats of any username!

    > `link`
    > > `set [username] [platform]` - Set your Apex username!
    >
    > > `remove` - Unset your Apex username.

- `/fortnite (Weapon, Weapon Type, Inventory, Interact, Drop)` - Generate a random Fortnite Battle Royale challenge!

- `/map` - Find the current Apex Legends maps!

**Information Commands**
- `/ping` - Replies with Pong!

**Music Commands**
- `/play [query] (position)` - Play a song!
- `/nowplay [query]` - Play a song immediately!
- `/skip` - Skip the current song in the queue!
- `/seek` - Jump to part of a song.
- `/queue (page)` - View the music queue for the server.
- `/np` - Now Playing. Get information about the currently playing song.
- `/cq` - Clear Queue. Clears everything in the music queue.
- `/disconnect` - Disconnect from the current voice channel.
- `/loop` - Sets loop mode.

### 💡 Additional Features

- **Automatic Voice Channels**

    - Naming a voice channel `Join to Create` allows a flexible amount of voice channels.

    - When someone joins the channel, they are automatically given a new voice channel that others can join. It is deleted when everyone leaves.

- **Rules**

    - Typing `!rules` will create a rule sheet in the current channel. Feel free to customize it however you want in `events/messageCreate.js`.

- **Talk with Abigail**

    - Mentioning or replying to Abigail with text in your message will prompt her to respond using GPT-3.
