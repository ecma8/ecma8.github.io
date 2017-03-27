var http=require('http');
var server=http.createServer(function(req,res){
	res.writeHeader(200,{'Content-type':'text/plain'})
	res.end('hello World')
})
server.listen(1337,'127.0.0.1')
console.log('server runimg')
