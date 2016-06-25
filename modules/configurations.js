module.exports = {
    telegram: {
        token: '192960484:AAGbKCTcFx8rtngx3bkjAAYL0EcS6f8YoQA',
        options: {
            polling: true
        }
    },
    database: {
        connectionString: 'mongodb://the-wall-db:the-wall-db2000@ds013221.mlab.com:13221/telegram-the-wall-bot',
        user: 'the-wall-db',
        password: 'the-wall-db2000'
    },
    text: {
        app_key_text: 'Your app key:\n',
        already_subscribed: 'You are already signed up for notifications'
    }
};