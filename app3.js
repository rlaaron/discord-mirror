const { Client, MessageAttachment } = require("discord.js-selfbot-v13")
const {EmbedBuilder, WebhookClient} = require("discord.js")
require('dotenv').config();
let usertoken = process.env.TOKEN;
let allowedServers = ['954172075503927366'];
const url = process.env.WEBHOOK
// const wbid = im2xMvDvflllcdmvcKNDjimwhExaQmJ7EkWmoi;
// CHAT
const webhook = new WebhookClient({id: "1013201604326989964", token: "im2xMvDvflllcdmvcKNDjimwhExaQmJ7EkWmoi-dbiFM7fmjiIfcxJr9LsalCTglINVI"});
// const webhook = new WebhookClient({url: "https://discordapp.com/api/webhooks/1013201604326989964/im2xMvDvflllcdmvcKNDjimwhExaQmJ7EkWmoi-dbiFM7fmjiIfcxJr9LsalCTglINVI"});
const generalID = ['954172076015648851']
// const user = new Discord.Client();



// TRADES AND ACTIVE
// const trades = new DiscordReal.WebhookClient({ url: process.env.WEBHOOK })

let a = 'https://';

const client = new Client();
client.login(usertoken);
client.on("ready", ready => {
    console.log('Crypto Mirror ready')
    client.on("messageCreate", messageCreate => {
        // console.log(messageCreate)
        if(messageCreate.author.bot) return;
        if (messageCreate.channel.id === generalID[0]) {
            let content1 = messageCreate.content ? messageCreate.content : { embeds: [messageCreate]};
            let username2 = messageCreate.author.username ? messageCreate.author.username : { embeds: [messageCreate.embeds[0]]};
            let avatar2 = messageCreate.author.avatarURL() ? messageCreate.author.avatarURL() : { embeds: [messageCreate.embeds[0]]};
            // let avatar = `${a}cdn.discordapp.com/avatars/${messageCreate.author.id}/${messageCreate.author.avatar}.webp?size=128`
            // const embed = new EmbedBuilder()
            // .setColor(0x00AE86)
            // .setAuthor(username2, avatar2)
            // .setDescription(content1);
            // let media = messageCreate.attachments.array()
            // media.forEach(item => {
            //     content1 += ' ' + item.url
            // })
            // content1 = content1.attachments || [0]
            // content1.attachments.forEach(item => {console.log(item);})
            
            
            // content1.forEach(item => {console.log(item);})

            console.log(content1.attachments[0].url);

            // webhook.send({embeds: [embed]});
            // webhook.send({
            //         content: content1,
            //         username: username2,
            //         avatarURL: avatar2,
            //         // embeds: [embed],
            //     });
        }

        // if (allowedServers.includes(messageCreate.channel.guild.id) && !messageCreate.author.bot) {
        //     let username2 = messageCreate.author.username;
        //     let avatar = `${a}cdn.discordapp.com/avatars/${messageCreate.author.id}/${messageCreate.author.avatar}.webp?size=128`
        //     let mensaje = messageCreate.content
        //     console.log(mensaje);
            // let media = messageCreate.attachments.array()
            // media.forEach(item => {
            //     mensaje = mensaje + ' ' + item.url
            // })
            

            // SALSA
            // if (generalID.includes(messageCreate.channel.id)) {
                // webhook.send(mensaje, { username: username2, avatarURL: avatar })
            // } 
            // webhook.send({
            //     content: mensaje,
            //     username: username2,
            //     avatarURL: avatar,
            //     embeds: [embed],
            // });
    
        // }

    });

});