$(document).ready(function(){
	$('.jigou-select-title-one').click(function(){
		var i=$('.jigou-select-title-one').index(this);
		$('.jigou-select-title-one').eq(i).addClass('jigou-select-color').siblings().removeClass('jigou-select-color');
		$('.jigou-select-box-one').eq(i).show().siblings().hide();
		
	})
})
