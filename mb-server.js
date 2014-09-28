var http  = require('http'),
    util  = require('util'),
    querystring = require('querystring'),
    port = process.env.PORT || 5000,
    mongo = require('mongodb')
    host  = process.env.MONGOHQ_URL || "mongodb://@127.0.0.1:27017/twitter-clone",
    messages = []


function serve(err, client) {
 
 if (err) throw err;

 var collection = new mongo.Collection( client, 'messages' )

 var app = http.createServer( function (req, res) {
  //exports.server = http.createServer( function (req, res) {

  if (req.method === "POST" && req.url === "/messages/create.json")
  {
    req.on('data', function(data) {
	collection.insert(
	  querystring.parse(data.toString('utf-8')),
	  {safe:true},
	  function(err, obj) {
	    if (err) throw err
	    res.end( JSON.stringify(obj) )
	    console.log(util.inspect(obj) )
	  }
	)
    })

  }

  if (req.method === "GET" && req.url === "/messages/list.json") 
  {
    //var body = exports.getMessages()
 
    collection.find().toArray( function(err, results) {
      res.writeHead(200, { 'Content-Type':'text/plain' })
      console.dir(results)
      res.end(JSON.stringify(results))
    })

  }
  else
  {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    })
    res.end('Hello World\n')
  }
 
  console.log(req.method)
  }).listen(port)
}

// Make the connetion and serve
mongo.Db.connect(host, serve )

console.log('Server running at http://127.0.0.1:%s', port)


