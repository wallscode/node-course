// function doWork (data, callback) {
// 	callback('done');
// }

// function doWorkPromise (data) {
// 	return new Promise(function (resolve, reject) {
// 		setTimeout(function () {
// 			resolve('Everything worked!');
// 		}, 3000);
// 		// reject({
// 		// 	error:'something bad happened'
// 		// });
// 	});
// }

// doWorkPromise('some data').then(function (data) {
// 	console.log(data);
// }, function(error) {
// 	console.log(error);
// });
var request = require('request');

function getWeather(location) {
	return new Promise(function(resolve, reject){
		var encodedLocation = encodeURIComponent(location);
		var url='http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&appid=44db6a862fba0b067b1930da0d769e98&units=imperial';

		if(!location) {
			return reject('No location provided');
		}

		request({
			url: url,
			json: true
		}, function(error, response, body) {
			if (error) {
				reject('Unable to fetch weather.');
			} else {
				//console.log(JSON.stringify(body, null, 4));
				resolve('It\'s ' + body.main.temp + ' in ' + body.name);
			}
		});
	});	
}

getWeather('Philadelphia').then(function (currentWeather) {
	console.log(currentWeather);
}, function (error) {
	console.log(error);
});