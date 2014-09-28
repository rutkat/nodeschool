var express = require('express'),
    app = express(),
    port = 3000

app.get('/', function(req, res) {

  res.send('OK')

})

app.listen(port)

console.log("Server running on 127.0.0.1:%s", port)

