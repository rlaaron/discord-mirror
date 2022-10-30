const { WebhookClient } = require("discord.js")
require('dotenv').config();

/* Getting the values from the .env file. */
const usertoken = process.env.TOKEN;
// add ids from the chats to listen to
const id1 = process.env.ID1;
const id2 = process.env.ID2;
const IDgeneral = process.env.IDGENERAL;
const IDbot = process.env.IDBOT;
const webhook1 = new WebhookClient({ id: "1013201604326989964", token: "im2xMvDvflllcdmvcKNDjimwhExaQmJ7EkWmoi-dbiFM7fmjiIfcxJr9LsalCTglINVI" });
const webhook2 = new WebhookClient({ id: "1013532925364535346", token: "AAEZFoOGSeTcJP8wi6Ijc_do-1HpkVKQs-Zph3zZAX-6kDZAxlhHCeOSkWN_i5GqiCan" });
const webhookErr = new WebhookClient({ id: "1013967197590270022", token: "OlJFRgQ1ZVU8mXXjMV2nhbQzigbkXbg_4FnlfDqkwV5lrx673ZbACVLxobkIzvHApJro" });
module.exports = {
    webhook1,
    webhook2,
    webhookErr,
    id1,
    id2,
    IDgeneral,
    IDbot
}