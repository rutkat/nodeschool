var fs = require('fs')

fs.readFile(process.argv[2], 'utf-8', function(err, buffer) {
	if (err) return;
	var buf = buffer.split('\n').length;
	console.log(buf-1);
})
