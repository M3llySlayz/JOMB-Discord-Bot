const { Events, Message } = require('discord.js');

module.exports = {
    name: Events.MessageCreate,
    execute(client) {
        if (client.user.name === msg.author.name) {
            // don't respond to own messages
            return;
        }
        if (msg.msg === 'shup'){
            let textChannel = msg.channel;
            try { textChannel.send("no"); } catch { console.log("it didn't work"); }
        }
    }
}