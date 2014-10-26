var through = require('through'),
    split   = require('split')

var tr = through( function write(data) {
	this.queue(data.toString().toLowerCase())
  },
  function end() {
	this.queue(null)
  })


process.stdin.pipe(split(tr.toUpperCase())).pipe(process.stdout)
