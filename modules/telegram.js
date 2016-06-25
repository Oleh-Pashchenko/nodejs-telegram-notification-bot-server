const telegramBot = require('node-telegram-bot-api');
const configurations = require('./configurations.js');
const bot = new telegramBot(configurations.telegram.token,
    configurations.telegram.options);
bot.onText(/\/start/, message => {
    let chatId = message.chat.id;
    
    // TODO: Generate Application Key
    bot.sendMessage(chatId, `${configurations.text.app_key_text} ${chatId}` );
});