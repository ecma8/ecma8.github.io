$(function(){
    $('#contactForm').on('submit',function(){
    	var name = $("#name").val();
    	var email = $("#email").val();
    	var message = $("#message").val();
    	if(name=="")
    	{
			$('.p1').html('名字不能为空');
			$("#name").focus();
			return false;
		}
    	else{
    		$('.p1').html('&nbsp;');
    	}
    	if(email==""){
			$('.p2').html('邮箱不能为空！');
			$("#email").focus();
			return false;
		}
    	else{
    		$('.p2').html('&nbsp;');
    	}
    	if(!(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(email))){
			$('.p2').html('请输入正确的邮箱！');
			$("#email").focus();
			return false;
		}
    	else{
    		$('.p2').html('&nbsp;');
    	}
    	if(message==""){
			$('.p3').html('建议不能为空！');
			$("#message").focus();
			return false;
		}
    	else{
    		$('.p3').html('&nbsp;');
    	}
    })
});
