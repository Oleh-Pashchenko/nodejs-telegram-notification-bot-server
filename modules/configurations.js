module.exports = {
    telegram: {
        token: '202855970:AAGdK-DEzBKkAagF-Gl_QETcTfzB3a7tSEg',
        options: {
            polling: true
        }
    },
    database: {
        connectionString: 'mongodb://{0}:{1}@ds013221.mlab.com:13221/telegram-the-wall-bot',
        user: 'the-wall-db',
        password: 'the-wall-db2000'
    },
    texts: {
        app_key_text: 'Your app key:\n'
    }
};