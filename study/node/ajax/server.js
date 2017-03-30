var http = require("http");
var url = require("url");
var fs = require("fs");

var str='{"id":"001",name:"Jack",arg:11}';
function onRequest(req, res){
  	console.log("Request received.");
 	res.writeHead(200,{"Content-Type":'text/plain','charset':'utf-8','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS'});
	res.write(str);
  	res.end();
}
http.createServer(onRequest).listen(8888);
console.log("Server has started.port on 8888\n");
console.log("test data: "+str.toString());