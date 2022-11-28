/* Importing the discord.js-selfbot-v13 and discord.js libraries. */
const { Client } = require("discord.js-selfbot-v13")
require('dotenv').config();
// const {webhook1, webhook2, webhookErr, id1, id2, IDgeneral, IDbot } = require('./webhook.js');
const { generalID, webhooks, webhookErr, IDbot } = require('./webhook.js');

/* Getting the values from the .env file. */
const usertoken = process.env.TOKEN;
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
    // if (messageCreate.author.bot) return;
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
            // check if is clicked message
            messageCreate.authorId == IDbot  ?  messageCreate.type == "REPLY" ? content = messageCreate.cleanContent : messageCreate.clickButton(messageCreate.components[0].components[0].customId) : null;
            // check if a message is to length
            content.length > 2000 ? content = content.slice(0, 2000) : null;
            // send the message to the webhook
            // console.log(messageCreate);
            // console.log(messageCreate);
            // console.log(messageCreate.mentions.users.first().username);
            // console.log(JSON.stringify(messageCreate.mentions.users.first().phoneNumber));
            // console.log(messageCreate.mentions.users.first().emailAddress);
            // messageCreate.mentions.roles.first().name ? content = `rol: ${messageCreate.mentions.roles.first().name} \n ${content}`   : null;
            // messageCreate.mentions.roles.first().name ? content = content.replace("<@&1029588575995564042>", "<@&1036420175978827799>") : null;
            // console.log(messageCreate.mentions.roles.first().id);
            // console.log(content);
            // 1029588575995564042
            try{
                if (typeof content !== 'string') throw new error(errorMessage);
                // messageCreate.author.bot ? webhooks[i].send({content, username }) : webhooks[i].send({content, username, avatarURL });
                webhooks[i].send({content, username, avatarURL });
            }catch(err){
                let errString = JSON.stringify(content);
                errString = `Error: ${err}\n Objeto: \n${errString}`;
                webhookErr.send({ content: errString, username, avatarURL });
            }
        }
    }
});

