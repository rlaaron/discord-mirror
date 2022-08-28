/* Importing the discord.js-selfbot-v13 and discord.js libraries. */
const { Client } = require("discord.js-selfbot-v13")
const {WebhookClient} = require("discord.js")
require('dotenv').config();

/* Getting the values from the .env file. */
const usertoken = process.env.TOKEN;
// add ids from the chats to listen to
const id1 = process.env.ID1;
const id2 = process.env.ID2;
/* Creating a new webhook client for each webhook.
    You can add more webhooks to listen the message in more chats.
*/
const webhook1 = new WebhookClient({id: "1013201604326989964", token: "im2xMvDvflllcdmvcKNDjimwhExaQmJ7EkWmoi-dbiFM7fmjiIfcxJr9LsalCTglINVI"});
const webhook2 = new WebhookClient({id: "1013532925364535346", token: "AAEZFoOGSeTcJP8wi6Ijc_do-1HpkVKQs-Zph3zZAX-6kDZAxlhHCeOSkWN_i5GqiCan"});
// add ids to the array
const generalID = [ id1, id2]
// add webhooks to the array
const webhooks = [webhook1, webhook2]

// Creating a new client of selfbot.
const client = new Client();
// login to discord with the token
client.login(usertoken);

// When the client is ready, it will log "Ready!" in the console.
client.on("ready", ready => {
    console.log('Crypto Mirror ready')
});

/* Listening to the messages in the chats and sending them to the webhooks. */
client.on("messageCreate", messageCreate => {
    /* Checking if the message is from a bot. If it is, it will return and not send the message to the
    webhook. */
    if(messageCreate.author.bot) return;
    /* Checking if the message is from the chat that you want to listen to. If it is, it will send the
    message to the webhook. */
    for(let i = 0; i < generalID.length; i++) {
        if (messageCreate.channel.id === generalID[i]) {
            let content1 = messageCreate.content ? messageCreate.content : { embeds: [messageCreate]};
            let username2 = messageCreate.author.username ? messageCreate.author.username : { embeds: [messageCreate.embeds[0]]};
            let avatar2 = messageCreate.author.avatarURL() ? messageCreate.author.avatarURL() : { embeds: [messageCreate.embeds[0]]};
            // if the message is a img or a txt
            try{
                
                content1 =  messageCreate.attachments.first().url
            }catch{}
            /* Sending the message to the webhook. */
            webhooks[i].send({ content: content1, username: username2, avatarURL: avatar2 });           
        }
    }
    
});