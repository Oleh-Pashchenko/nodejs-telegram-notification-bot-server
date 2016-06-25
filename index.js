const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const telegram = require('./modules/telegram');
app.use(bodyParser.json());
require('./routes')(app, telegram);
app.listen(port, () => {
    console.log('Listening on port: ' + port);
});