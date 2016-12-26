
var ws=null;
var list=null;
// 扩展API加载完毕，现在可以正常调用扩展API 
function plusReady(){
	ws=plus.webview.currentWebview();
	ws.setPullToRefresh({support:true,
		height:"50px",
		range:"100px",
		contentdown:{
			caption:"下拉可以刷新"
		},
		contentover:{
			caption:"释放立即刷新"
		},
		contentrefresh:{
			caption:"正在刷新..."
		}
	},onRefresh);
	plus.nativeUI.toast("下拉可以刷新");
}
// 判断扩展API是否准备，否则监听"plusready"事件
if(window.plus){
	plusReady();
}else{
	document.addEventListener("plusready",plusReady,false);
}
// DOM构建完成获取列表元素
//document.addEventListener("DOMContentLoaded",function(){
//	list=document.getElementById("list");
//	console.log(list)
//})
// 刷新页面
var num=0;
function onRefresh(){
	list=document.getElementById("list");
	setTimeout(function(){
//		if(list){
			num++;
			var item=document.createElement("li");
			item.innerHTML='<div class="left"><a href="javascript:;" onclick="go()">'+num+'德国收容40万难民 攻击难民事件激增至近500起</a><br/><span>11分中前</span></div><div class="right"><img src="http://t12.baidu.com/it/u=http://image1.chinanews.com.cn/cnsupload/big/2015/09-22/4-426/8b10e6233e6141968ce778ec9d1de9eb.jpg&fm=36" alt=""/></div>';
			list.insertBefore(item,list.firstChild);
//		}
		ws.endPullToRefresh();
	},2000);
}
/*
 * 
 * 
 * 点击a链接
var aaa=document.getElementsByTagName('a');
for(var i=0;i<aaa.length;i++){
	aaa[i].onclick=function(){
		var aurl=this.href;
		
	}
}




mui.plusReady(function(){
	//窗口上下拉
	var win=plus.webview.currentWebview();
	var message=document.createElement('div');
	message.style.cssText='margin-top:30px;width: 100%;height:30px;text-align: center;'
	message.innerHTML="加载更多";
	var box=document.getElementsByClassName('mui-table-view')[0];
	document.body.appendChild(message);
	win.setStyle({bounce:'vertical'});
	var flag=true;
	var url=location.href;
	var num=1;
	//滚动到底部
document.addEventListener( "plusscrollbottom", function(){
	if(!flag){
		return;
	}
	flag=false;
	num++;
	
	mui.ajax(url+'&page='+num,{
	dataType:'text',//服务器返回json格式数据
	type:'get',//HTTP请求类型
	timeout:10000,//超时时间设置为10秒；
	success:function(data){
		//服务器返回响应，根据响应结果，分析是否登录成功；
		if(data.replace(/^\s*|\s*$/,'')==''){
			alert('没有更多');
		}else{
			box.innerHTML+=data;
		}
		flag=true;
	},
	error:function(xhr,type,errorThrown){
		flag=true;//异常处理；
		console.log(type);
	}
});
	
}, false );

})
*/











