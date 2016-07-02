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
        already_subscribed: 'You are already signed up for notifications',
        welcome : 'Welcome to the BackendNotify.\nUse:\n/token - For generate channel token and subscribe\n/gettoken - For getting your current token',
        not_subscribed: 'You are not subscribed to the channel.\nUse:\n/token - For generate channel token and subscribe',
        install_text: 'npm install telegram-backend-notify --save',
        example_code_text: 'const backendNotify = require(\'telegram-backend-notify\');\nconst notify = new backendNotify(\'{0}\');\nnotify.emit(\'Hello Telegram :)\').catch(error => {\nconsole.log(error);\n});',
        code_information_text: 'Use:\n/code - for get information about how to use this bot in the your backend'
    }
};