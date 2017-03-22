$(document).ready(function(){
    /*直播设置页面切换*/
    $('.live-tab-title div').click(function(){
        var index=$(this).index();
        $(this).addClass('tab-color').siblings().removeClass('tab-color');
        $('.live-inner').eq(index).show().siblings('.live-inner').hide();
    });
    /*播放窗口页面切换*/
    $('.button-list input').click(function(){
        var index=$(this).index();
        $('.img-list img').eq(index).show().siblings().hide();
    });
    //菜单菜单内容切换
    $("#menu-list").on('click','.menu-left',function(){
        var name=$(this).text();
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
    })
    //菜单排序

    var arr_4=[];//菜单数组
    var arr_1=[];//流程数组
    var arr_2=[];//活动介绍数组
    var arr_3=[];//参展商数组
    var liucheng_num=0;//流程序号
    var jieshao_num=0;//活动介绍序号
    var logo_num=0;//参展商序号
    /*自定义菜单添加*/
    $('#menu-select').change(function(){
        var index=$(this).children(':selected').val();
        var text=$(this).children(':selected').text();
        $(this).children().eq(0).prop('selected',true);
        if(index==2)
        {
            $('.live-mask').show();
            $('.menu-inner-one').eq(index).show();
            return false;
        }
        if(arr_4.indexOf('互动') >-1 || arr_4.indexOf('图文直播') >-1)
        {
            layer.alert('只可添加互动 图文直播其中一项');
            return false;
        }
        else{
            if(index==0)
            {
                $('.live-mask').show();
                $('.menu-inner-one').eq(index).show();
            }
            if(index==1)
            {
                $('.live-mask').show();
                $('.menu-inner-one').eq(index).show();
            }
        }
    });
    /*菜单列表添加*/
    function add_Menu_List(val){
        var li=$('<li></li>');
        var li_menu=$('<div class=menu-left>'+val+'</div>');
        var li_caozuo=$('<div class=menu-right></div>');
        var sel=$('<select class=menu_caozuo_list></select>');
        var caozuo=$('<option value=0>操作</option>');
        var bianji=$('<option value=1>编辑</option>');
        var del=$('<option value=2>删除</option>');
        sel.append(caozuo).append(bianji).append(del)
        li_caozuo.append(sel);
        li.append(li_menu).append(li_caozuo);
        $('#menu-list').append(li);
    }
    /*菜单列表操作*/
    $(document).on('change','.menu_caozuo_list',function(){
        var menu_name=$(this).parent().siblings('.menu-left').text();
        var val=$(this).children(':selected').val();
        var menu_li=$('#menu-list li');
        var arr_index=arr_4.indexOf(menu_name);
        var that=$(this);
        $(this).children().eq(0).prop('selected',true);
        if(menu_name=='互动' && val==1){
            $('.live-mask').show();
            $('.menu-inner-one').eq(0).show();
        }
        if(menu_name=='互动' && val==2){           
            layer.confirm('确定要删除么？删除会清空当前菜单下的数据', {
                btn: ['确定','取消'] //按钮
                }, function(){
                    that.parent().parent().remove();
                    arr_4.splice(arr_index,1);
                    $("#btn_hudong").attr('data-num',0);
                    $('#dialog').children().remove();
                    $('.guanfang').hide();
                    $('#hudong_name').val('');
                    $('#hudong_miaoshu').val('');
                    layer.msg('已删除', {icon: 1});
                    
                }, function(){
            });
        }
        if(menu_name=='图文直播' && val==1){
            $('.live-mask').show();
            $('.menu-inner-one').eq(1).show();
        }
        if(menu_name=='图文直播' && val==2){
            layer.confirm('确定要删除么？删除会清空当前菜单下的数据', {
                btn: ['确定','取消'] //按钮
                }, function(){
                    that.parent().parent().remove();
                    arr_4.splice(arr_index,1);
                    $("#btn_tuwen").attr('data-num',0);
                    $('#tuwen_ul_list').children().remove();
                    layer.msg('已删除', {icon: 1});
                }, function(){
            });
        }
        if(menu_name=='流程' && val==1){
            $('.live-mask').show();
            $('.menu-inner-one').eq(2).show();
            $('#jieshao_list').children().eq(0).prop('selected',true);
            $('.inner-right').eq(0).show().siblings('.inner-right').hide();
            $('.live-jieshao').eq(0).show().siblings('.live-jieshao').hide();
        }
        if(menu_name=='流程' && val==2){
            layer.confirm('确定要删除么？删除会清空当前菜单下的数据', {
                btn: ['确定','取消'] //按钮
                }, function(){
                    that.parent().parent().remove();
                    arr_4.splice(arr_index,1);
                    arr_1=[];
                    $("#btn_liucheng").attr('data-num',0);
                    $('#liucheng_ul_list').find('li').remove();
                    $('#liucheng_ul_list_1').find('li').remove();
                    var tr_len=$('#table_liucheng tr').size();
                    $('#table_liucheng tr').slice(1, tr_len).remove();
                    liucheng_num=0
                    layer.msg('已删除', {icon: 1});
                }, function(){
            });
        }
        if(menu_name=='活动介绍' && val==1){
            $('.live-mask').show();
            $('.menu-inner-one').eq(2).show();
            $('#jieshao_list').children().eq(1).prop('selected',true)
            $('.inner-right').eq(1).show().siblings('.inner-right').hide();
            $('.live-jieshao').eq(1).show().siblings('.live-jieshao').hide();
        }
        if(menu_name=='活动介绍' && val==2){
            layer.confirm('确定要删除么？删除会清空当前菜单下的数据', {
                btn: ['确定','取消'] //按钮
                }, function(){
                    that.parent().parent().remove();
                    arr_4.splice(arr_index,1);
                    arr_2=[];
                    $("#btn_jieshao").attr('data-num',0);
                    $('#jieshao_ul_list').find('li').remove();
                    $('#jieshao_ul_list_1').find('li').remove();
                    var tr_len=$('#table_jieshao tr').size();
                    $('#table_jieshao tr').slice(1, tr_len).remove();
                    jieshao_num=0
                    layer.msg('已删除', {icon: 1});
                }, function(){
            });
        }
        if(menu_name=='参展商' && val==1){
            $('.live-mask').show();
            $('.menu-inner-one').eq(2).show();
            $('#jieshao_list').children().eq(2).prop('selected',true)
            $('.inner-right').eq(2).show().siblings('.inner-right').hide();
            $('.live-jieshao').eq(2).show().siblings('.live-jieshao').hide();
        }
        if(menu_name=='参展商' && val==2){
            layer.confirm('确定要删除么？删除会清空当前菜单下的数据', {
                btn: ['确定','取消'] //按钮
                }, function(){
                    that.parent().parent().remove();
                    arr_4.splice(arr_index,1);
                    $("#btn_logo").attr('data-num',0);
                    arr_3=[];
                    $('#logo_ul_list').find('li').remove();
                    $('#logo_ul_list_1').find('li').remove();
                    var tr_len=$('#table_logo tr').size();
                    $('#table_logo tr').slice(1, tr_len).remove();
                    logo_num=0
                    layer.msg('已删除', {icon: 1});
                }, function(){
            });
        }
    })


    function add_Hudong_List(src,name,time,miaoshu){
        var str='<li><div class=wx-img><img src='+src+'></div><div class=ding><p><span>'+name+'</span><b class=time>'+time+'</b></p><p>'+miaoshu+'</p></div></li>'
        $('#dialog').append(str);
    }
    function add_Tuwen_List(src,name,time,miaoshu){
        var str='<li><div class=wx-img><img src='+src+'></div><div class=ding><p><span>'+name+'</span><b class=time>'+time+'</b></p><p>'+miaoshu+'</p></div><div class="tuwen-img"><img src='+src+'></div></li>'
        $('#tuwen_ul_list').append(str);
    }

    /*互动页面提交按钮操作*/
    $("#btn_hudong").click(function(){
        var hudong_menu=$('#hudong_menu').val();
        var hudong_name=$('#hudong_name').val();
        var hudong_miaoshu=$('#hudong_miaoshu').val();
        var hudong_img=$('#hudong_img').attr('src');
        var num=parseInt($(this).attr('data-num'));
        $('#hudong_name_1').text(hudong_name)
        $('#hudong_miaoshu_1').text(hudong_miaoshu)
        $('#hudong_img_1').attr('src',hudong_name)
        if(num==0)
        {
            $('.guanfang').show();
            for(var i=0;i<10;i++)
            {
                add_Hudong_List('','这是测试文字','14:00:00','这是测试文字')
            }
        }
        else{
            return false;
        }
    });
    /*互动页面提交按钮操作*/
    $("#btn_tuwen").click(function(){
        var tuwen_menu=$('#tuwen_menu').val();
        var tuwen_name=$('#tuwen_name').val();
        var tuwen_img=$('#tuwen_img').attr('src');
        var num=parseInt($(this).attr('data-num'));
        $('#tuwen_name_1').text(tuwen_name);
        $('#tuwen_img_1').attr('src',tuwen_name);
        if(num==0)
        {
            for(var i=0;i<10;i++)
            {
                add_Tuwen_List('','这是测试文字','14:00:00','这是测试文字')
            }
        }
        else{
            return false;
        }
    });
    /****************保存按钮操作********************/
    $(".btn_save").click(function(){
        var val=$(this).attr('data-val');
        var num=parseInt($(this).attr('data-num'));
        var index=$(".btn_save").index(this);
        if(num==0)
        {
            arr_4.push(val);
            add_Menu_List(val);
            $(this).attr('data-num',1);
            $('.live-mask').hide();
            $('.menu-inner-one').hide();
        }
        else if(num>0){
            $('.live-mask').hide();
            $('.menu-inner-one').hide();
        }
        $('.live-box-one').eq(index).show().siblings('.live-box-one').hide();
    });
    // $("#btn_liucheng").click(function(){
    //     var val=$(this).attr('data-val');
    //     arr_4.push(val);
    //     add_Menu_List(val);
    //     $('.live-mask').hide();
    //     $('.menu-inner-one').hide();
    // })
    // $("#btn_jieshao").click(function(){
    //     var val=$(this).attr('data-val');
    //     arr_4.push(val);
    //     add_Menu_List(val);
    //     $('.live-mask').hide();
    //     $('.menu-inner-one').hide();
    // })
    // $("#btn_logo").click(function(){
    //     var val=$(this).attr('data-val');
    //     arr_4.push(val);
    //     add_Menu_List(val);
    //     $('.live-mask').hide();
    //     $('.menu-inner-one').hide();
    // })

















    //直播介绍切换
    $('#jieshao_list').change(function(){
        var index=$(this).children(':selected').val();
        $('.live-jieshao').eq(index).show().siblings('.live-jieshao').hide();
        $('.inner-right').eq(index).show().siblings('.inner-right').hide();
    });
    /*关闭弹出层*/
    $('.live-close').click(function(){
        $('.live-mask').hide();
        $('.menu-inner-one').hide();
        $('.menu-paixu').hide();
    });
    //移除table元素
    function del(obj){
        obj.parent().parent().remove();
    }
    /******************************************************/
    /*********************流程页面*************************/
    /******************************************************/
    //流程列表添加
    function add_Liucheng_List(num,name,time,miaoshu,table){
        var tr=$('<tr></tr>');
        var num=$('<td>'+num+'</td>');
        var name=$('<td>'+name+'</td>');
        var time=$('<td>'+time+'</td>');
        var miaoshu=$('<td>'+miaoshu+'</td>');
        var caozuo=$('<td></td>');
        var bianji=$('<a href=javascript:; class=liucheng_bianji>编辑</a>');
        var del=$('<a href=javascript:; class=liucheng_del>删除</a>');
        caozuo.append(bianji).append(del);
        tr.append(num).append(name).append(time).append(miaoshu).append(caozuo);
        table.append(tr);
    }
    function add_Liucheng_page(name,time,miaoshu,page){
        var li=$('<li></li>');
        var div=$('<div class=liucheng-list></div>');
        var h1=$('<h1>'+name+'</h1>');
        var p1=$('<p>'+time+'</p>');
        var p2=$('<p>'+miaoshu+'</p>');
        div.append(h1).append(p1).append(p2);
        li.append(div);
        page.append(li);                    
    }
    //流程页面添加
    $('#add_liucheng').click(function(){
        var liucheng_name=$('#liucheng_name').val();
        var liucheng_time=$('#liucheng_time').val();
        var liucheng_miaoshu=$('#liucheng_miaoshu').val();
        if($(this).val()=="添加"){
            liucheng_num++;
            add_Liucheng_List(liucheng_num,liucheng_name,liucheng_time,liucheng_miaoshu,$('#table_liucheng'))
            add_Liucheng_page(liucheng_name,liucheng_time,liucheng_miaoshu,$('#liucheng_ul_list_1'))
            add_Liucheng_page(liucheng_name,liucheng_time,liucheng_miaoshu,$('#liucheng_ul_list'))
            arr_1.push([liucheng_name,liucheng_time,liucheng_miaoshu]);
        }
        if($(this).val()=="保存当前选项"){
            var data_val=parseInt($(this).attr('data-val'));
            arr_1[data_val][0]=liucheng_name;
            arr_1[data_val][1]=liucheng_time;
            arr_1[data_val][2]=liucheng_miaoshu;
            $('#table_liucheng tr').eq(data_val+1).find('td').eq(1).text(liucheng_name);
            $('#table_liucheng tr').eq(data_val+1).find('td').eq(2).text(liucheng_time);
            $('#table_liucheng tr').eq(data_val+1).find('td').eq(3).text(liucheng_miaoshu);
            $('#liucheng_ul_list_1 li').eq(data_val).find('h1').text(liucheng_name);
            $('#liucheng_ul_list_1 li').eq(data_val).find('p').eq(0).text(liucheng_time);
            $('#liucheng_ul_list_1 li').eq(data_val).find('p').eq(1).text(liucheng_miaoshu);
            $('#liucheng_ul_list li').eq(data_val).find('h1').text(liucheng_name);
            $('#liucheng_ul_list li').eq(data_val).find('p').eq(0).text(liucheng_time);
            $('#liucheng_ul_list li').eq(data_val).find('p').eq(1).text(liucheng_miaoshu);
            $(this).val('添加');
            $(this).removeAttr('data-val');
            $('#liucheng_name').val("");
            $('#liucheng_time').val("");
            $('#liucheng_miaoshu').val("");
        }
    })
    //流程列表编辑
    $(document).on('click','.liucheng_bianji',function(){
        var index=$('.liucheng_bianji').index(this);
        $('#liucheng_name').val(arr_1[index][0]);
        $('#liucheng_time').val(arr_1[index][1]);
        $('#liucheng_miaoshu').val(arr_1[index][2]);
        $('#add_liucheng').attr('data-val',index);
        $('#add_liucheng').val('保存当前选项');
    })
    //流程列表删除
    $(document).on('click','.liucheng_del',function(){
        $('#add_liucheng').val('添加');
        var index=$('.jieshao_del').index(this);
        arr_1.splice(index,1);
        del($(this));
        $('#liucheng_ul_list_1 li').eq(index).remove();
        $('#liucheng_ul_list li').eq(index).remove();
        liucheng_num--;
        var tr_len=$('#table_liucheng tr').size();
        for(var i=0;i<tr_len-1;i++)
        {
            $('#table_liucheng tr').eq(i+1).find('td').eq(0).text(i+1);
        }
    })
    /******************************************************/
    /*********************介绍页面*************************/
    /******************************************************/
    //介绍列表添加
    function add_Jieshao_List(num,name,img,miaoshu,table){
        var tr=$('<tr></tr>');
        var num=$('<td>'+num+'</td>');
        var name=$('<td>'+name+'</td>');
        var img=$('<td>'+img+'</td>');
        var miaoshu=$('<td>'+miaoshu+'</td>');
        var caozuo=$('<td></td>');
        var bianji=$('<a href=javascript:; class=jieshao_bianji>编辑</a>');
        var del=$('<a href=javascript:; class=jieshao_del>删除</a>');
        caozuo.append(bianji).append(del);
        tr.append(num).append(name).append(img).append(miaoshu).append(caozuo);
        table.append(tr);
    }
    function add_Jieshao_page(name,img,miaoshu,page){
        var li=$('<li></li>');
        var div=$('<div class=jieshao-list></div>');
        var h1=$('<h1>'+name+'</h1>');
        var img=$('<img src='+img+'>');
        var p=$('<p>'+miaoshu+'</p>');
        div.append(h1).append(img).append(p);
        li.append(div);
        page.append(li);
    }
    //介绍页面添加
    $('#add_jieshao').click(function(){
        var jieshao_name=$('#jieshao_name').val();
        var jieshao_img=$('#jieshao_img').attr('src');
        var jieshao_miaoshu=$('#jieshao_miaoshu').val();
        if($(this).val()=="添加"){
            jieshao_num++;
            add_Jieshao_List(jieshao_num,jieshao_name,jieshao_img,jieshao_miaoshu,$('#table_jieshao'))
            add_Jieshao_page(jieshao_name,jieshao_img,jieshao_miaoshu,$('#jieshao_ul_list_1'))
            add_Jieshao_page(jieshao_name,jieshao_img,jieshao_miaoshu,$('#jieshao_ul_list'))
            arr_2.push([jieshao_name,jieshao_img,jieshao_miaoshu]);
        }
        if($(this).val()=="保存当前选项"){
            var data_val=parseInt($(this).attr('data-val'));
            arr_2[data_val][0]=jieshao_name;
            arr_2[data_val][1]=jieshao_img;
            arr_2[data_val][2]=jieshao_miaoshu;
            $('#table_jieshao tr').eq(data_val+1).find('td').eq(1).text(jieshao_name);
            $('#table_jieshao tr').eq(data_val+1).find('td').eq(2).text(jieshao_img);
            $('#table_jieshao tr').eq(data_val+1).find('td').eq(3).text(jieshao_miaoshu);
            $('#jieshao_ul_list_1 li').eq(data_val).find('h1').text(jieshao_name);
            $('#jieshao_ul_list_1 li').eq(data_val).find('img').attr('src',jieshao_img);
            $('#jieshao_ul_list_1 li').eq(data_val).find('p').text(jieshao_miaoshu);
            $('#jieshao_ul_list li').eq(data_val).find('h1').text(jieshao_name);
            $('#jieshao_ul_list li').eq(data_val).find('img').attr('src',jieshao_img);
            $('#jieshao_ul_list li').eq(data_val).find('p').text(jieshao_miaoshu);
            $(this).val('添加');
            $(this).removeAttr('data-val');
            $('#jieshao_name').val("");
            //$('#jieshao_img').attr('src','');
            $('#jieshao_miaoshu').val("");
        }
    })
    //介绍页面列表编辑
    $(document).on('click','.jieshao_bianji',function(){
        var index=$('.jieshao_bianji').index(this);
        $('#jieshao_name').val(arr_2[index][0]);
        $('#jieshao_img').attr('src',arr_2[index][1]);
        $('#jieshao_miaoshu').val(arr_2[index][2]);
        $('#add_jieshao').attr('data-val',index);
        $('#add_jieshao').val('保存当前选项');
    })
    //介绍页面列表删除
    $(document).on('click','.jieshao_del',function(){
        $('#add_jieshao').val('添加');
        var index=$('.jieshao_del').index(this);
        arr_2.splice(index,1);
        del($(this));
        $('#jieshao_ul_list_1 li').eq(index).remove();
        $('#jieshao_ul_list li').eq(index).remove();
        jieshao_num--;
        var tr_len=$('#table_jieshao tr').size();
        for(var i=0;i<tr_len-1;i++)
        {
            $('#table_jieshao tr').eq(i+1).find('td').eq(0).text(i+1);
        }
    })
    /******************************************************/
    /***********************参展商*************************/
    /******************************************************/
    //参展商图片列表
    function add_Logo_List(num,img,table){
        var tr=$('<tr></tr>');
        var num=$('<td>'+num+'</td>');
        var img=$('<td>'+img+'</td>');
        var caozuo=$('<td></td>');
        var bianji=$('<a href=javascript:; class=logo_bianji>编辑</a>');
        var del=$('<a href=javascript:; class=logo_del>删除</a>');
        caozuo.append(bianji).append(del);
        tr.append(num).append(img).append(caozuo);
        table.append(tr);
    }
    function add_Logo_page(img,page){
        var li=$('<li></li>');
        var div=$('<div class=logo-list></div>');
        var img=$('<img src='+img+'>');
        div.append(img);
        li.append(div);
        page.append(li);
    }
    //参展商片图片列表添加
    $('#add_logo').click(function(){
        var logo_img=$('#logo_img').attr('src');
        if($(this).val()=="添加"){
            logo_num++;
            add_Logo_List(logo_num,logo_img,$('#table_logo'))
            add_Logo_page(logo_img,$('#logo_ul_list_1'))
            add_Logo_page(logo_img,$('#logo_ul_list'))
            arr_3.push(logo_img);
        }
        if($(this).val()=="保存当前选项"){
            var data_val=parseInt($(this).attr('data-val'));
            arr_3[data_val]=logo_img;
            $('#table_logo tr').eq(data_val+1).find('td').eq(1).text(logo_img);
            $('#logo_ul_list_1 li').eq(data_val).find('img').attr('src',jieshao_miaoshu);
            $('#logo_ul_list li').eq(data_val).find('img').attr('src',jieshao_miaoshu);
            $(this).val('添加');
            $(this).removeAttr('data-val');
            //$('#logo_img').attr('src','');
        }
    })
    //参展商片图片列表编辑
    $(document).on('click','.logo_bianji',function(){
        var index=$('.logo_bianji').index(this);
        $('#logo_img').attr('src',arr_3[index]);
        $('#add_logo').attr('data-val',index);
        $('#add_logo').val('保存当前选项');
    })
    //参展商片图片列表删除
    $(document).on('click','.logo_del',function(){
        $('#add_logo').val('添加');
        var index=$('.logo_del').index(this);
        arr_3.splice(index,1);
        del($(this));
        $('#logo_ul_list_1 li').eq(index).remove();
        $('#logo_ul_list li').eq(index).remove();
        logo_num--;
        var tr_len=$('#table_logo tr').size();
        for(var i=0;i<tr_len-1;i++)
        {
            $('#table_logo tr').eq(i+1).find('td').eq(0).text(i+1);
        }
    })
    function paixu_Menu_list(name,val,obj){
        var p=$('<p></p>');
        var span=$('<span>'+name+'</span>');
        var input=$('<input type=number max=4 min=1 step=1 maxlength=1 placeholder=请输入序号 value='+val+'>');
        p.append(span).append(input);
        obj.append(p)   
    }
    $('#paixu_alert').click(function(event) {
        $('.live-mask').show();
        $('.menu-paixu').show();
        $('.paixu-list').find('p').remove()
        var arr_len=arr_4.length;
        for(var i=0;i<arr_len;i++)
        {
            paixu_Menu_list(arr_4[i],i+1,$('.paixu-list'));
            $('.paixu-list input').eq(i).siblings('span').attr('data-val',(i+1))
        }   
    });
    $('.paixu-list').on('blur','input',function(){
        var index=$('.paixu-list input').index(this);
        $('.paixu-list input').eq(index).siblings('span').attr('data-val',$('.paixu-list input').eq(index).val())
    })
    $('#btn_paixu').click(function(event) {
        var input=$('.paixu-list input');
        var arr_5=[];
        var flag=true;
        var len=$('.paixu-list p').length;
        for(var j=0;j<len;j++)
        {
            arr_5.push(input.eq(j).val());
        }
        arr_5.sort();
        if(arr_5[0]==1)
        {
            for(var k=0;k<arr_5.length-1;k++)
            {
                if((arr_5[k+1]-arr_5[k])!=1)
                {
                    flag=false;
                    layer.alert('填写数字有误')
                    break
                }
                else{
                    flag=true;
                }
            }
        }
        else{
            flag=false;
            layer.alert('填写数字有误')
        }
        if(flag){
            $('#menu-list').children('li').remove();
            for(var i=0;i<len;i++)
            {
                arr_4[i]=$('.paixu-list span[data-val='+(i+1)+']').text();
                add_Menu_List($('.paixu-list span[data-val='+(i+1)+']').text())
            }
            $('.live-mask').hide();
            $('.menu-paixu').hide();
        }
    });
});




