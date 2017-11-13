const Telegraf = require('telegraf');
const { reply } = Telegraf;

const config = require("./config.json");

const bot = new Telegraf(config.API_Key);
// bot.command('/hi', ({ reply }) => reply('Yo'));
bot.on('message', (ctx) => {
    if (ctx.message.text == "hi")
        ctx.reply("你好")
});
bot.startPolling();
