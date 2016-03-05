console.log('Loading myHashDetailTest function');

var doc = require('dynamodb-doc');
var dynamo = new doc.DynamoDB();

var https = require('https');

/**
 * HOW TO Make an HTTP Call - GET
 */
// options for GET
var optionsget = {
	host : 'kano.is', // here only the domain name
	// (no http/https !)
	port : 443,
	path : '/index.php?k=api&username=wallsbit&api=c929e772db80467895547d912ec25916&json=y&work=y', // the rest of the url with parameters if needed
	method : 'GET' // do GET
};

console.info('Options prepared:');
console.info(optionsget);
console.info('Do the GET call');

// do the GET request
var reqGet = https.request(optionsget, function(res) {
	console.log("statusCode: ", res.statusCode);
	// uncomment it for header details
//	console.log("headers: ", res.headers);


	res.on('data', function(d) {
		console.info('GET result:\n');
		process.stdout.write(d);
		console.info('\n\nCall completed');
	});

});

reqGet.end();
reqGet.on('error', function(e) {
	console.error(e);
});

/**
 * Provide an event that contains the following keys:
 *
 *   - operation: one of the operations in the switch statement below
 *   - tableName: required for operations that interact with DynamoDB
 *   - payload: a parameter to pass to the operation being performed
 */
exports.handler = function(event, context) {
    //console.log('Received event:', JSON.stringify(event, null, 2));

    var operation = event.operation;

    if (event.tableName) {
        event.payload.TableName = event.tableName;
    }

    switch (operation) {
        case 'create':
            dynamo.putItem(event.payload, context.done);
            break;
        case 'read':
            dynamo.getItem(event.payload, context.done);
            break;
        case 'update':
            dynamo.updateItem(event.payload, context.done);
            break;
        case 'delete':
            dynamo.deleteItem(event.payload, context.done);
            break;
        case 'list':
            dynamo.scan(event.payload, context.done);
            break;
        case 'echo':
            context.succeed(event.payload);
            break;
        case 'ping':
            context.succeed('pong');
            break;
        default:
            context.fail(new Error('Unrecognized operation "' + operation + '"'));
    }
};