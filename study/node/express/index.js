var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'thinkphp'
});
app.use('/public',express.static(__dirname+'/public'));
app.all('*', function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "X-Requested-With");
   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
   res.header("X-Powered-By",' 3.2.1');
   //res.header("Content-Type", "application/json;charset=utf-8");
   next();
});
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.get('/index', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
})
app.get('/list', function (req, res) {
    res.sendFile( __dirname + "/" + "list.html" );
})  
app.get('/list1', function (req, res) {
    connection.query('select * from  think_form limit '+req.query.id*10 +',10', function(err, rows, fields) {
        if (err) throw err;
        res.send(rows)
    });
    connection.end();
})



app.post('/process_post', urlencodedParser, function (req, res) {
 
   // 输出 JSON 格式
    response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name
    };
    res.end(JSON.stringify(response));
})


var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})