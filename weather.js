var request = require('request');

module.exports = function(location, callback){
	var encodedLocation = encodeURIComponent(location);
	var url='http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&appid=44db6a862fba0b067b1930da0d769e98&units=imperial';

	if(!location) {
		return callback('No location provided');
	}

	request({
		url: url,
		json: true
	}, function(error, response, body) {
		if (error) {
			callback('Unable to fetch weather.');
		} else {
			//console.log(JSON.stringify(body, null, 4));
			callback('It\'s ' + body.main.temp + ' in ' + body.name);
		}
	});
}