const { Client } = require("discord.js-selfbot-v13")
const { WebhookClient, ButtonBuilder } = require("discord.js")
require('dotenv').config();

const usertoken = process.env.TOKEN;
// Creating a new client of selfbot.
const client = new Client();
// login to discord with the token
client.login(usertoken);
const webhookErr = new WebhookClient({ id: "1013967197590270022", token: "OlJFRgQ1ZVU8mXXjMV2nhbQzigbkXbg_4FnlfDqkwV5lrx673ZbACVLxobkIzvHApJro" });

// client.on("message", message => {
//     // client.message.send("enviado desde terminal");
//     client.channels.cache.get("1013201582604681336").send("enviado desde terminal");
// });
//1032052924244836372

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', messageCreate => {
    if (messageCreate.channel.id === '1013201582604681336'){
        // if (messageCreate.content === 'envialo') {
        //     // messageCreate.reply('mesnaje enviado desde terminal');
        //     // await ButtonBuilder.click(messageCreate);
        //     messageCreate.clickButton("1032052924244836372");
        // }
        // let actions = messageCreate.interaction;
        // console.log(messageCreate);
        // console.log(`componentes generados: ${JSON.stringify(messageCreate.components)}`);
        // console.log(`componentes 1: ${JSON.stringify(messageCreate.components[0])}`);
        // console.log(`componentes 1.1: ${JSON.stringify(messageCreate.components[1])}`);
        // console.log(`componentes 2: ${JSON.stringify(messageCreate.components[0].components)}`);
        // console.log(`componentes 2: ${JSON.stringify(messageCreate.components[0].components[0])}`);
        // console.log(`id boton: ${messageCreate.components[0].components[0].customId}`);
        // let content;
        // messageCreate.authorId == "1023602697238237195" && messageCreate.type == "REPLY" ?  : console.log("no es un reply");
        // messageCreate.authorId == "1023602697238237195" && messageCreate.type == "REPLY" ? content = messageCreate.cleanContent : messageCreate.clickButton(messageCreate.components[0].components[0].customId);

        // if(messageCreate.authorId == "1023602697238237195" ){
            // console.log(`id boton: ${messageCreate.components[0].components[0].customId}`);
            // messageCreate.clickButton(messageCreate.components[0].components[0].customId);
        // }

        // console.log(messageCreate);
        // messageCreate.clickButton(messageCreate.components[0].components[0].customId);
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
                // messageCreate.author.bot ? webhooks[i].send({content, username }) : webhooks[i].send({content, username, avatarURL });
                messageCreate.type == 'REPLY' ? webhookErr.reply({content, username, avatarURL }) : webhookErr.send({content, username, avatarURL });
            }catch(err){
                let errString = JSON.stringify(content);
                errString = `Error: ${err}\n Objeto: \n${errString}`;
                webhookErr.send({ content: errString, username, avatarURL });
            }

    }
});