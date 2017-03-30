function pet(words)
{
	this.words=words;
	this.speck=function(){
		console.log(this.words)
	}
}
function dog(words)
{
	console.log(this)
	pet.call(this,words)
}
var dog = new dog('wong');
dog.speck()

