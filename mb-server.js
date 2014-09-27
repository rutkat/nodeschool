var http  = require('http'),
    util  = require('util'),
    querystring = require('querystring'),
    port = 1337

exports.server = http.createServer( function (req, res) {

  if (req.method === "POST" && req.url === "/messages/create.json")
  {
    var message = ''
    req.on('data', function(data, message) {
	console.log( data.toString('utf-8') )
  	message = exports.addMessage( data.toString('utf-8') )
    })
    console.log(util.inspect(message, true, null) )
    console.log(util.inspect(messages, true, null) )

    res.writeHead(200, {
	'Content-Type': 'text/plain'
    })

    res.end(message)
  }

  if (req.method === "GET" && req.url === "/messages/list.json") 
  {
    var body = exports.getMessages()
 
    res.writeHead(200, {
      'Content-Length': body.length,
      'Content-Type': 'text/plain'
    })
    res.end(body)
  }
  else
  {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    })
    res.end('Hello World\n')
  }
 
  console.log(req.method)

}).listen(port, "127.0.0.1")

console.log('Server running at http://127.0.0.1:%s', port)


exports.getMessages = function() {
  return JSON.stringify(messages)
}

exports.addMessage = function(data) {
  messages.push( querystring.parse(data) )
  return JSON.stringify( querystring.parse(data) )
}

var messages = []
// first message example
messages.push({
  "name":"John",
  "message":"hi"
})

