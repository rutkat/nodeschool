var fs = require('fs'),
    path = require('path'),
    contents = []

module.exports = fs.readdir(pathname, function(err, files, ext) {

  if (err) throw new Error

  for (var i = 0; i < files.length; i++) {

    if(path.extname(files[i]) === '.' + ext)
    {
      contents.push(files[i])
    }

  }
  return contents
})

