var http = require('https');

var options = {
  hostname: 'kano.is',
  port: 443,
  path: '/index.php?k=api&username=wallsbit&api=c929e772db80467895547d912ec25916&json=y&work=y',
  method: 'GET'
};

// Used to escape regular expressions
function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}
// Used to replace :0 labels that are included in the jacked up JSON responses from Kano.is
function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

exports.handler = function(event, context) {
    http.request(options, function(res) {
      //console.log('STATUS: ' + res.statusCode);
      //console.log('HEADERS: ' + JSON.stringify(res.headers));
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        var result = replaceAll(chunk, ':0', '');
        var resultObject = JSON.parse(result);
        console.log(resultObject.w_hashrate5m);
      });
    }).end();

context.succeed();
};