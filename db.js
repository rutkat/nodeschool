var util = require('util'),
    mongodb = require('mongodb'),
    Db = mongodb.Db,
    Connection = mongodb.Connection,
    Server = mongodb.Server,
    host = '127.0.0.1',
    port = 27017

var db = new Db('test', new Server(host, port, {}), {safe:false} )

db.open( function(e, c) {
  
  console.log( util.inspect(db) )
 // console.log( db._state)
  db.close()

})

console.log( util.inspect(db) )
