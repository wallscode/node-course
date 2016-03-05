var http = require('https');
var url = 'https://kano.is/index.php?k=api&username=wallsbit&api=c929e772db80467895547d912ec25916&json=y&work=y';

http.get(url, function(response) {
	var finalData = '';

  	response.on('data', function (data) {
  		finalData += data.toString()
  	});

  	response.on('end', function() {
    	console.log(finalData.length);
    	console.log(finalData.toString());
  	});
});