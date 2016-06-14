var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?appid=73bc0885063134812941f7152b4edd14&q=Philadelphia&units=imperial';

module.exports = function (callback){
	request({
	    url:url,
	    json:true
	}, function(error, response, body) {
	    if (error) {
	        callback('Unable to fetch weather.');
	    } else {
	        //console.log(JSON.stringify(body,null, 4));
	        callback('It\'s ' + body.main.temp + ' in ' + body.name);
	    }
	});
}



