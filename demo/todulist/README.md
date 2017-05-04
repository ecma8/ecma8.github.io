# jQuery toDuList

toDuList 是基于 jQuery 列表添加删除插件。


**版本：**

* jquery v1.7+
* jquery.todulist.min.js


## 使用方法

### 载入 JavaScript 文件

```html
<script src="js/jquery.js"></script>
<script src="js/jquery.todulist.js"></script>
```

### DOM 结构

```html
<select name="" id="button">
	<option value="23">001</option>
	<option value="24">002</option>
	<option value="25">003</option>
	<option value="26">004</option>
	<option value="27">005</option>
	<option value="28">006</option>
	<option value="29">007</option>
	<option value="30">008</option>
	<option value="31">009</option>
	<option value="32">010</option>
</select>
<div class="table"></div>
```

### 调用 toDuList

```javascript
$('#button').toDuList({
	box:$('.table'),
	flag:2,
	title:'编号,姓名,操作',
	attrArr:'abc123'
})
```
### 参数说明

* box 必选项table表格容器
* flag 非必选项 默认为1 有两个参数 1,2 当参数为1的时候 只可选择一个 当参数为2的时候可以选择多个
* title 非必选项 此项设置为表格的头
* attrArr 非必选项 此项为当前触发事件标签设置的一个属性 默认为array 此项功能 存储选择的数据

### 数据获取
```javascript
console.log($('#button').attr('abc123'))
```
### 数据获取说明

* abc123为当前触发事件标签设置的属性
