const request = require('request');
//var db = require('./db.js');  //TODO add MongoDB logs



const token = require('../keys/WolframBotToken.js').token; //bot's unique identifier //TODO fix token path
const author_chat_id = require('../keys/author_chat_id.js').author_chat_id; //author's chat_id



send_message = function(chat_id, result) {

    var URL = 'https://api.telegram.org/bot' + token + '/sendmessage';

    /*var reply_keyboard = JSON.stringify({
        "keyboard": [
            [], []
        ]
    });     //adds reply keyboard with buttons representing current functions*/ //TODO do reply keyboard buttons

    var options = {

        url: URL,

        form: {

            chat_id: chat_id,

            text: result

            //reply_markup: reply_keyboard
        }

    };

    request.post(options, function(err, res, body) {

	    body = JSON.parse(body);

	    if (!body.ok) {

            console.log("Response was delivered successfully!\n");

            //db.make_record(body, "Responses"); //TODO add MongoDB logs

        } else {

            send_message(author_chat_id, "SECURITY\n\nSomething is wrong with Wolfram Bot!\n" +
                "User with chat_id = " + chat_id.toString()); //let me know

	    }

    });

};


module.exports.send_message = send_message;
