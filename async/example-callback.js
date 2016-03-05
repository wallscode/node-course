var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Philadelphia&units=imperial&appid=44db6a862fba0b067b1930da0d769e98';

request({
    url:url,
    json:true
}, function(error, response, body) {
    
})