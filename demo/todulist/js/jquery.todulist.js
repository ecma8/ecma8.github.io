(function($){
	$.fn.extend({
		toDuList:function(option){
			var title=option.title?option.title:'id,name,set';
			var box=option.box?option.box:'';
			var flag=option.flag?option.flag:1;
			var attrArr=option.attrArr?option.attrArr:'array';
			var caozuo=option.caozuo?option.caozuo:'删除';
			var table=$('<table></table>');
			var thead=$('<tr></tr>');
			var title_arr=title.split(',');
			var that=$(this);
			var _arr=[];
			var del=that.selector.replace(/\#/,'')+'_del';
			var className=that.selector.replace(/\#/,'')+'_id';
			for(var i=0;i<title_arr.length;i++)
			{
				var td=$('<th>'+title_arr[i]+'</th>');
				thead.append(td);
			}
			table.append(thead);
			box.append(table);
			var _num=0;
			function _add_list(option){
				var tr=$('<tr></tr>')
				var id=$('<td class='+className+'>'+option.id+'</td>');
				var name=$('<td>'+option.name+'</td>');
				var _caozuo=$('<td><a href=javascript:; class='+del+'>'+option.caozuo+'</a></td>');
				tr.append(id).append(name).append(_caozuo);
				table.append(tr);
			}
			$(this).on('change',function(){
				num=0;
				if(flag==1)
				{
					num=0;
					var val=$(this).children(':selected').val();
					var text=$(this).children(':selected').text();
					if(box.find('tr').size()==1)
					{
						_num++;
						_add_list({
							id:_num,
							name:text,
							caozuo:caozuo
						})
						_arr.push(val);
						console.log(_arr);
						console.log($(this));
						$(this).attr(attrArr,_arr)
					}
					else{
						table.find('tr').eq(1).find('td').eq(1).text(text);
						_arr=[];
						_arr.push(val);
						$(this).attr(attrArr,_arr)
					}
				}
				else if(flag==2){
					
					var val=$(this).children(':selected').val();
					var text=$(this).children(':selected').text();
					if(_arr.indexOf(val)>-1)
					{
						return false;
					}
					else{
						_num++;
						_add_list({
							id:_num,
							name:text,
							caozuo:caozuo
						})
						_arr.push(val);
						$(this).attr(attrArr,_arr)
					}
				}
			});
			box.on('click','.'+del,function(){
				var index=$('.'+del).index(this);
				_num--;
				$('.'+del).parent().parent().parent().find('tr').eq(index+1).remove();
				_arr.splice(index,1);
				that.attr(attrArr,_arr)
				for(var i=0;i<$('.'+del).size();i++)
				{
					$('.'+className).eq(i).text(i+1);
				}
			})
		}
	});
})(jQuery)