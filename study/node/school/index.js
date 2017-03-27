var kclass=require('./class.js');
exports.add=function(kclasses){
	console.log(kclasses)
	kclasses.forEach(function(item,index){
		var _kclass=item;
		var teacherName=item.teacherName;
		var students=item.students;
		kclass.add(teacherName,students);
	})
}