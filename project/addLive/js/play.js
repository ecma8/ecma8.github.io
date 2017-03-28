$(document).ready(function(){
    $('.live-menu ul li div').click(function(){
        var index=$('.live-menu ul li div').index(this);
        $('.live-menu ul li').eq(index).find('div').addClass('menu-color').parent().siblings().find('div').removeClass('menu-color');
        var name=$(this).attr('data-val');
        if(name=='互动'){
            $('.live-box-one[box-name=互动]').show().siblings('.live-box-one').hide();
        }
        if(name=='图文直播'){
            $('.live-box-one[box-name=图文直播]').show().siblings('.live-box-one').hide();
        }
        if(name=='流程'){
            $('.live-box-one[box-name=流程]').show().siblings('.live-box-one').hide();
        }
        if(name=='活动介绍'){
            $('.live-box-one[box-name=介绍]').show().siblings('.live-box-one').hide();
        }
        if(name=='参展商'){
            $('.live-box-one[box-name=参展商]').show().siblings('.live-box-one').hide();
        }
    });
    var video_button=$('.video-button input').size();
    if(video_button>0)
    {
        $('.video').css('height','4.2rem');
    }
    else{
        $('.video').css('height','3.5rem');
    }
    function setHeight(){
        var wH=$(window).height();
        var vH=$('.video').height();
        var menuH=$('.live-menu').height();
        var guanfangH=$('.guanfang').height();
        var sendMessageH=$('.sendmessage').height();
        var messageListH=$('#dialog');
        var boxListH=$('.live-box-one');
        var boxListUlH=$('.live-box-one .ul-list');
        var boxH=$('.live-box');
        var h1=wH-vH-menuH-guanfangH-sendMessageH;
        var h2=wH-vH-menuH;
        messageListH.height(h1);
        boxListH.height(h2);
        boxH.height(h2);
        boxListUlH.height(h2);
    }
    setHeight();
    var menu_len=$('.live-menu ul li').size();
    $('.live-menu ul li').css('width',(6.4/menu_len)+"rem");
    $('.video-button input').click(function(event) {
        var index_num=$(this).index();
        $(this).addClass('button-color').siblings().removeClass('button-color');
        $('video').attr('src','http://video1.haojiangtai.com/app-name/'+$(this).attr('data-val')+'.m3u8');
        $('video')[0].play();
    });
});
