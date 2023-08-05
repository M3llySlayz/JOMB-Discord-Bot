# JOMB

This is just a Discord bot I made for our server.

If you wanna join, [here's the link.](https://discord.gg/j8CKGqG3m2)

I hope this bot's code helps you with your own pursuits, as I definitely needed a while to get this to work. I made a guide down below for you.

## Making The Bot Work

This guide assumes you already have Node.

If you're not sure, run `node -v` in a terminal, and if it outputs `v16.9.0` or higher, you're good. 

If not, download it [here.](https://nodejs.org/)

In a terminal after downloading the bot and opening it in your editor of choice, make sure you have the Discord dependcies by running `npm install discord.js`.
Once this is done, set up a `config.json` that looks somewhat like this.
```js
{
    "token": "your-bot-token-here",
    "clientId": "your-client-id-here",
    "guildId": "your-server-id-here"
}
```
Next, make a file called `.env` and fill it with this.
```env
A=123
B=456
DISCORD_TOKEN=YOUR-BOT-TOKEN-HERE
```
With that, you should be good to go. Turn on the bot by running `node .` or `node index.js`, and deploy new or updated slash commands by using `node deploy-commands.js`.
