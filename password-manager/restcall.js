var https = require('https');

var body;

var options = {
  hostname: 'kano.is',
  port: 443,
  path: '/index.php?k=api&username=wallsbit&api=c929e772db80467895547d912ec25916&json=y&work=y',
  method: 'GET'
};

var req = https.request(options, function(res) {
  console.log('statusCode: ', res.statusCode);
  console.log('headers: ', res.headers);
  res.on('data', function(response) {
  	console.log('stdout start: ')
    process.stdout.write(response);	
    console.log('stdout end: ')
    console.log(response);
  });
});

req.end();

console.log('req start console log')
console.log(req);
console.log('req stop console log');

req.on('error', function(e) {
  console.error(e);
});

console.log(body);

