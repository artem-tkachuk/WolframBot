const http = require('http');
const APPID = require('../../keys/WolframBotAPPID.js').APPID;
const parseString = require('xml2js').parseString;
const telegram = require('./telegram.js');

var calculate = function(original_text) {

    const URL = 'http://api.wolframalpha.com/v2/query';

    const options = {

        url: URL,

        form: {

            input: original_text,

            format: 'image',

            appid: APPID,

        }

    };

    http.get(options, function (response) {

        var body = '';

        response.on('data', function (d) {

            body += d;

        });

        console.log(body);

        response.on('end', function(body) {

            parseString(body, function(err, result) {



            });

        });

    });

}


   /* var img = await request.get(result.img, function(err, res, body) { */


module.exports.calculate = calculate;