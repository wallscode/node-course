var http = require('https');

var options = {
  hostname: 'kano.is',
  port: 443,
  path: '/index.php?k=api&username=wallsbit&api=c929e772db80467895547d912ec25916&json=y&work=y',
  method: 'GET'
};

function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

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