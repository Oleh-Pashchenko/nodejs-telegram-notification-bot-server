var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
app.use(bodyParser.json());
app.listen(port, function() {
    console.log('Listening on port: ' + port);
});