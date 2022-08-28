const { Client } = require("discord.js-selfbot-v13")
const {WebhookClient} = require("discord.js")
require('dotenv').config();
let usertoken = process.env.TOKEN;
const url = process.env.WEBHOOK
const webhook1 = new WebhookClient({id: "1013201604326989964", token: "im2xMvDvflllcdmvcKNDjimwhExaQmJ7EkWmoi-dbiFM7fmjiIfcxJr9LsalCTglINVI"});
const webhook2 = new WebhookClient({id: "1013532925364535346", token: "AAEZFoOGSeTcJP8wi6Ijc_do-1HpkVKQs-Zph3zZAX-6kDZAxlhHCeOSkWN_i5GqiCan"});
const generalID = ['954172076015648851', "956376830523347004"]
// const webhooks = [webhook1, webhook2]
let webhook5;
const webhooks = [webhook5 = new WebhookClient({id: "1013532925364535346", token: "AAEZFoOGSeTcJP8wi6Ijc_do-1HpkVKQs-Zph3zZAX-6kDZAxlhHCeOSkWN_i5GqiCan"})]


const client = new Client();
client.login(usertoken);
client.on("ready", ready => {
    console.log('Crypto Mirror ready')
});

client.on("messageCreate", messageCreate => {
    if(messageCreate.author.bot) return;
    for(let i = 0; i < generalID.length; i++) {
        if (messageCreate.channel.id === generalID[i]) {
            let content1 = messageCreate.content ? messageCreate.content : { embeds: [messageCreate]};
            let username2 = messageCreate.author.username ? messageCreate.author.username : { embeds: [messageCreate.embeds[0]]};
            let avatar2 = messageCreate.author.avatarURL() ? messageCreate.author.avatarURL() : { embeds: [messageCreate.embeds[0]]};
            try{
                content1 =  messageCreate.attachments.first().url
            }catch{}
            webhooks[i].send({ content: content1, username: username2, avatarURL: avatar2 });           
        }
    }
    
});