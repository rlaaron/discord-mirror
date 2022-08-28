// import selfcore from 'selfcore';
// const token = "NzMxMDExODc2MTg3Nzk5NjI0.GbuD0F.vpZvLDNJ5kt4END6OuB1_oFGjshWVmTSNXs7l0";
// const client  =  new selfcore()
// const gateway = new selfcore.Gateway(token);

// // const token = result.env.TOKEN;
// // console.log(token);
// // id = process.env.ID;
// // webhook = process.env.WEBHOOK;
// const id = "954172076015648851";
// const webhook = "https://discordapp.com/api/webhooks/1013201604326989964/im2xMvDvflllcdmvcKNDjimwhExaQmJ7EkWmoi-dbiFM7fmjiIfcxJr9LsalCTglINVI";

// gateway.on('message', (m) => {
//     if (m.channel_id === id) {
//         let content = m.content ? m.content : { embeds: [m.embeds[0]]};
//         client.sendWebhook(webhook, content);
//     }
// })


require('dotenv').config();
const token = "NzMxMDExODc2MTg3Nzk5NjI0.GbuD0F.vpZvLDNJ5kt4END6OuB1_oFGjshWVmTSNXs7l0";
const client  =  new selfcore()
const gateway = new selfcore.Gateway(token);

// const token = result.env.TOKEN;
// console.log(token);
// id = process.env.ID;
// webhook = process.env.WEBHOOK;
const id = "954172076015648851";
const webhook = "https://discordapp.com/api/webhooks/1013201604326989964/im2xMvDvflllcdmvcKNDjimwhExaQmJ7EkWmoi-dbiFM7fmjiIfcxJr9LsalCTglINVI";

gateway.on('message', (m) => {
    if (m.channel_id === id) {
        let content = m.content ? m.content : { embeds: [m.embeds[0]]};
        client.sendWebhook(webhook, content);
    }
})

