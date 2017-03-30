var http=require('http')
var cheerio=require('cheerio')
var url = 'http://www.imooc.com/learn/637'

function filter(html){
	var $=cheerio.load(html);
	var arr=[];
	var che=$('.J-media-item');
	che.each(function(item){
		arr.push($(this).text())
	})
	return arr;
}
function print(data) {
	for(var i=0;i<data.length;i++)
	{
		console.log(data[i]+'\n');
	}
}
http.get(url,function(res){
	var html='';
	res.on('data',function(data){
		html+=data
	})
	res.on('end',function(){
		var x=filter(html);
		print(x);
	})
}).on('error',function(){
	console.log('数据错误')
})