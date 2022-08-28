const { Client, MessageAttachment } = require("discord.js-selfbot-v13")
const {EmbedBuilder, WebhookClient} = require("discord.js")
require('dotenv').config();
let usertoken = process.env.TOKEN;
const url = process.env.WEBHOOK
const webhook = new WebhookClient({id: "1013201604326989964", token: "im2xMvDvflllcdmvcKNDjimwhExaQmJ7EkWmoi-dbiFM7fmjiIfcxJr9LsalCTglINVI"});
const generalID = ['954172076015648851']

const client = new Client();
client.login(usertoken);
client.on("ready", ready => {
    console.log('Crypto Mirror ready')
    client.on("messageCreate", messageCreate => {
        if(messageCreate.author.bot) return;
        if (messageCreate.channel.id === generalID[0]) {
            let content1 = messageCreate.content ? messageCreate.content : { embeds: [messageCreate]};
            let username2 = messageCreate.author.username ? messageCreate.author.username : { embeds: [messageCreate.embeds[0]]};
            let avatar2 = messageCreate.author.avatarURL() ? messageCreate.author.avatarURL() : { embeds: [messageCreate.embeds[0]]};
            // const embed = new EmbedBuilder()
            // .setColor(0x00AE86)
            // .setAuthor(username2, avatar2)
            // .setDescription(content1);
            console.log(content1);
            // webhook.send({
            //         content: content1,
            //         username: username2,
            //         avatarURL: avatar2,
            //         // embeds: [embed],
            //     });
        }
    });

});