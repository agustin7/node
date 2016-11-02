var os = require('os');

console.log(os.freemem());

var lista=[];

for (var i = 0; i < 100000; i++) {
	lista.push(i);
}

console.log(os.freemem());