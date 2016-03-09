var https = require('https');

var body=''
var bodyObject = {};

var url = 'https://www.google.com/finance/info?q=NSE:COF'

// var reqGet = https.get(url, function(res) {
//     res.on('data', function (chunk) {
//         body += chunk;
//         bodyObject = JSON.parse(body);
//         console.log()
//     });
// });

// reqGet.on('error', function (err) {
//     console.log(err);
//     //console.log('error: ' + err.message);
// });

// console.log(bodyObject);



var req = https.get(url, function(res) {
    console.log("Request began");
    var output = '';

    res.on('data', function (chunk) {
        output += chunk;
    });

    res.on('end', function () {
        console.log('Request complete:');
        console.log(output);
    });
});

req.on('error', function (err) {
    console.log(err);
    //console.log('error: ' + err.message);
});

console.log("Script complete");