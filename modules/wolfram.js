const http = require('http');
const APPID = require('../../keys/WolframBotAPPID.js').APPID;
const parseString = require('xml2js').parseString;
const async = require("async");

var calculate = async function(original_text) {


    request(original_text, function (body) {

        return body;

    });


   /* var img = await request.get(result.img, function(err, res, body) {



    });*/

};

// ...or ES2017 async functions
async.mapLimit(urls, 5, async function(url) {
    const response = await fetch(url)
    return response.body
}, (err, results) => {
    if (err) throw err
    // results is now an array of the response bodies
    console.log(results)
})

async.request(original_text, callback) {

    const URL = 'http://api.wolframalpha.com/v2/query';

    const options = {

        url: URL,

        form: {

            input: original_text,

            format: 'image',

            appid: APPID,

            //reply_markup: reply_keyboard
        }

    };

    const result = await http.get(options, function (response) {

        var body = '';

        response.on('data', function (d) {

            body += d;

        };

        response.on('end', function() {

            const parsed = parseString(body).then() {

                return result;

            });

            callback ({

                body: parsed

            });

        });

    });

}

module.exports.calculate = calculate;