console.log('Loading HashDetailCall function');

var https = require('https');

console.log('Step 1');

var optionsget = {
	host : 'kano.is', 
	port : 443,
	path : '/index.php?k=api&username=wallsbit&api=c929e772db80467895547d912ec25916&json=y&work=y', // the rest of the url with parameters if needed
	method : 'GET'
};

console.log('Step 2');

console.log('Options prepared:');
console.log(optionsget);
console.log('Do the GET call');

// do the GET request
var reqGet = https.request(optionsget, function(res) {
  console.log("statusCode: ", res.statusCode);
  console.log("headers: ", res.headers);
console.log('Step 3');

  res.on('data', function(d) {
    process.stdout.write(d);
  });
});
reqGet.end();
console.log('Step 4');

reqGet.on('error', function(e) {
  console.error(e);
});
console.log('Step 5');

console.log(reqGet);
console.log('Step 6');

