const express = require('express');
const app = express();

const Telegram = require('./modules/telegram.js');
const token = '/' + require('../keys/WolframBotToken.js').token;
const Wolfram = require('./modules/wolfram.js');


var port = 8443;

app.post(token, function(req, res) {

    //TODO parse telegram request, get chat_id and text
    var chat_id, original_text;


    // TODO request Wolfram API for text


    //TODO get and parse Wolfram response
    var result;


    //TODO send back to user with chat id
    Telegram.send_message(chat_id, result);


});

app.listen(8443, function() {

    console.log("App listens on port " + port);

});