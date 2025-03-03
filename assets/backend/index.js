var http = require('http');
var fs = require('fs');
var events = require('events');
var formidable = require('formidable');
var eventEmitter = new events.EventEmitter();


http.createServer(function (req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
  fs.writeFile;
}).listen(5500);
