const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const token = '/' + require('./keys/WolframBotToken.js').token;
const Wolfram = require('./modules/wolfram.js');

app.use(bodyParser.json());

var port = 8443;

app.get('/', function(req, res) {
    res.statusCode(200);
   res.send("Welcome to Wolfram Bot!");
    onsole.log("Hi!!!!!!!!!!");
   res.end();

});

app.post(token, function(req, res) {

    console.log("Hi!!!!!!!!!!");

    try {
        var chat_id = req.body.message.chat.id;
        var original_text = req.body.message.text;
        Wolfram.calculate(chat_id, original_text);
        res.statusCode(200);
    } catch (e) {
        console.log(e);
    }

    res.send("Welcome to Wolfram Bot!");
    res.end();


});

app.listen(8443, function() {

    console.log("App listens on port " + port);

});