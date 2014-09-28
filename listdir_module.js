var fs = require('fs'),
    path = require('path'),
    contents = []

module.exports = function(files, ext, callback) {

  fs.readdir(files, function(err, files) {

    if (err) return callback(err)

    for (var i = 0; i < files.length; i++) {

      if(path.extname(files[i]) === '.' + ext)
      {
        contents.push(files[i])
      }

    }

    if (callback) {
	return callback(null, contents)
    }
  })

}
