console.log('myTestRestCall');

var https = require('https');

//exports.handler = function(event, context) {

var body='';
//var jsonObject = JSON.stringify(event);

// the post options
var optionspost = {
  host: 'kano.is',
  path: '/index.php?k=api&username=wallsbit&api=c929e772db80467895547d912ec25916&json=y&work=y',
  method: 'GET',
  headers: {
      'Content-Type': 'application/json',
  }
};

var reqGet = https.request(optionspost, function(res) {
    console.log("statusCode: ", res.statusCode);
    res.on('data', function (chunk) {
        body += chunk;
        console.log(typeof body);
        console.log(body);
    });
//    context.succeed('Success');
console.log('Success');
});

//reqPost.write(jsonObject);
reqGet.end();
//};