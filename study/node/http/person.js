var pet={
	words:'...',
	speck:function(say){
		console.log(say+' '+this.words);
	}
}
pet.speck(123);
var dog={
	words : 'wang',
}
pet.speck.call(dog,'speck')