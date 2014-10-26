var http = require('http')
var port = process.env.PORT || 1337

var got = http.get(process.argv[2], function(response) {

	if (response.statusCode === 200) {
		
		response.setEncoding('utf8');
		response.on('data', console.log)
		response.on('error', console.error)
	}
})

