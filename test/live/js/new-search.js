$(document).ready(function(){
	$('.select-title-one').click(function(){
		var i=$(".select-title-one").index(this);
		if($('.select-box').css('display')=='none')
		{
			$('.inner').hide();
			$('.select-box').show();
			$('.select-title-one').eq(i).addClass('title-color').siblings().removeClass('title-color');
			$('.select-box-one').eq(i).show().siblings().hide();
		}
		else{
			$('.inner').show();			
			$('.select-box').hide();
			$('.select-title-one').removeClass('title-color');
			$('.select-box-one').hide();
		}
	})
	$('.left').click(function(){
		var i=$('.left').index(this);
		$('.left').eq(i).addClass('select-left-a').siblings().removeClass('select-left-a');
		$('.select-right-box').eq(i).show().siblings().hide();
	})
	$('.select-right-top').click(function(){
		var i=$('.select-right-top').index(this);
		$('.select-right-bottom').stop().slideUp();
		$('.select-right-bottom').eq(i).stop().slideToggle();
		$('.select-right-top').removeClass('select-right-top-color');
		$('.select-right-top').eq(i).addClass('select-right-top-color');
		
	})
	$('.select-right-bottom a').click(function(){
		let i=$('.select-right-bottom a').index(this);
		$('.select-right-bottom a').eq(i).addClass('select-right-bottom-color').siblings().removeClass('select-right-bottom-color')
	})
	$('.select-three-box a').click(function(){
		let i=$('.select-three-box a').index(this);
		$('.select-three-box a').eq(i).addClass('select-three-color').siblings().removeClass('select-three-color')
	})
})
