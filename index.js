const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());
require('./routes')(app);
app.listen(port, () => {
    console.log('Listening on port: ' + port);
});