const mongoose = require('mongoose');
const configurations = require('../configurations.js');
const user = require('./controllers/user.js')(mongoose);
mongoose.connect(
    `${configurations.database.connectionString}`);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Connection was created');
});

module.exports.user = user;