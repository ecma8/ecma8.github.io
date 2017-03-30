function learn(aaa)
{
	console.log(aaa)
}
function we(callback,something){
	something+='is cool';
	callback(something)
}
we(learn,'node.js')


we(function(something){
	console.log(something)
},'jade')
