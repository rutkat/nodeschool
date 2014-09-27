var http = require('http'),
    assert = require('assert'),
    querystring = require('querystring'),
    util = require('util'),
    messageBoard = require('./mb-server')

assert.deepEqual( JSON.stringify(
	[{
	"name": "John",
	"message": "hi"
	}] ),
  messageBoard.getMessages())

