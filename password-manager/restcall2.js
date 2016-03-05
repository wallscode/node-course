var request = require('request');
function get_kano(username, apikey, callback) {
    var options = {
        uri : 'https://kano.is/index.php?k=api&username='+username+'&api='+apikey+'&json=y&work=y',
        method : 'GET'
    }; 
    var res = '';
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res = body;
        }
        else {
            res = 'Not Found';
        }
        callback(res);
    });
}

get_kano('wallsbit','c929e772db80467895547d912ec25916', function(resp){
    console.log(resp);
});