const telegramBot = require('node-telegram-bot-api');
const configurations = require('./configurations.js');
const mongo = require('./mongo').user;
const bot = new telegramBot(configurations.telegram.token,
    configurations.telegram.options);
    
bot.onText(/\/start/, message => {
    var chatId = message.chat.id;
    mongo.Set(chatId)
    .then(result => {
        if (result == true) {
            bot.sendMessage(chatId, `${configurations.text.already_subscribed}`);
        } else {
            bot.sendMessage(chatId, `${configurations.text.app_key_text}${result}`);
        }
    });
});

module.exports.send = data => {
    mongo.Get(data.key)
    .then(result => {
        bot.sendMessage(result.telegramId, data.message);
    });
};