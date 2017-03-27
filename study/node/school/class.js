var student = require('./student.js');
var teacher = require('./teacher.js');
function add(name1,students){
	teacher.add(name1);
	students.forEach(function(item,index){
		student.add(item);
	})
}
exports.add=add;

