// setTimeout(function(){
// 	console.log('1');
// }, 2000);

function printInTwoSeconds (message) {
	setTimeout(function(){
		console.log(message);
	},2000);
}

printInTwoSeconds('Hello async!');