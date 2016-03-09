var i = 0;
var countLimit = 8;

while (i < countLimit){
	console.log('while: ' + i);
	i++;
}

for (i=0; i < countLimit; i++) {
	console.log('for: ' + i);
}

function countDownFor(startingPoint, stoppingPoint){
	for (; startingPoint >= stoppingPoint; startingPoint--) {
	console.log('countDownFor: ' + startingPoint);
	}
}

function countDownWhile(startingPoint, stoppingPoint){
	while (startingPoint >= stoppingPoint){
	console.log('CountDownWhile: ' + startingPoint);
	startingPoint--;
	}
}

countDownFor(10,1);
countDownWhile(7,1);
