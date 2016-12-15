$(document).ready(function(){
   $('.login-title-one').click(function(){
       var index=$(this).index();
       $('.login-box-one').eq(index).show().siblings().hide();
       $(this).addClass('color').siblings().removeClass('color');
       if(index==0)
       {
           $('.new-login').css('height','360px')
       }
       else{
           $('.new-login').css('height','500px')
       }
   });
    $('.a1').click(function(){
        $('.login-box-one').eq(1).show().siblings().hide();
        $('.login-title-one').eq(1).addClass('color').siblings().removeClass('color');
        $('.new-login').css('height','500px')
    });
    $('.a3').click(function(){
        $('.login-box-one').eq(0).show().siblings().hide();
        $('.login-title-one').eq(0).addClass('color').siblings().removeClass('color');
        $('.new-login').css('height','360px')
    });
    $('.close').click(function(){
        $('.mask').hide()
    });
    $('textarea').focus(function(){
        if(true){
            $('.mask').show();
            $('.input input').click(function(){
                return false;
            })
        }
        else{
            $('.mask').hide();
        }
    })
});
