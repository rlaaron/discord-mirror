/* Importing the discord.js-selfbot-v13 and discord.js libraries. */
const { Client } = require("discord.js-selfbot-v13")
require('dotenv').config();
const {webhook1, webhook2, webhookErr, id1, id2} = require('./webhook.js');

/* Getting the values from the .env file. */
const usertoken = process.env.TOKEN;
// add ids to the array
const generalID = [id1, id2]
// add webhooks to the array
const webhooks = [webhook1, webhook2]

// Creating a new client of selfbot.
const client = new Client();
// login to discord with the token
client.login(usertoken);

// When the client is ready, it will log "Ready!" in the console.
client.on("ready", ready => {
    console.log(`Crypto Mirror ${ready.presence.status}`);
    if(ready.presence.status !== "online"){
        client.destroy();
        client.login(usertoken);
    }
});


/* Listening to the messages in the chats and sending them to the webhooks. */
client.on("messageCreate", messageCreate => {
    /* Checking if the message is from a bot. If it is, it will return and not send the message to the
    webhook. */
    if (messageCreate.author.bot) return;
    /* Checking if the message is from the chat that you want to listen to. If it is, it will send the
    message to the webhook. */
    for (let i = 0; i < generalID.length; i++) {
        if (messageCreate.channel.id === generalID[i]) {
            let content = messageCreate.content ? messageCreate.content : { embeds: [messageCreate] };
            let username = messageCreate.author.username ? messageCreate.author.username : { embeds: [messageCreate.embeds[0]] };
            let avatarURL = messageCreate.author.avatarURL() ? messageCreate.author.avatarURL() : { embeds: [messageCreate.embeds[0]] };
            let contImg = messageCreate.attachments.size > 0 ? messageCreate.attachments.first().url : null;
            // check if the message has a txt
            contImg ? messageCreate.content? content += `\n${contImg}` : content = contImg: null; 
            // check if is a pinned message
            messageCreate.type === 'CHANNEL_PINNED_MESSAGE' ? content = `:pushpin: PINNED_MESSAGE` : null;
            content.length > 2000 ? content = content.slice(0, 2000) : null;
            // send the message to the webhook
            try{
                if (typeof content !== 'string') throw new error(errorMessage);
                    webhooks[i].send({content, username, avatarURL });
            }catch(err){
                let errString = JSON.stringify(content);
                errString = `Error: ${err}\n Objeto: \n${errString}`;
                webhookErr.send({ content: errString, username, avatarURL });
            }
        }
    }
});

