var mymod = require('./listdir_module')

mymod(process.argv[2], process.argv[3], function(err, data){

  if (err) throw err

  var i = 0
  for (i; i < data.length; i++) {
    console.log(data[i])
  }

}) 
