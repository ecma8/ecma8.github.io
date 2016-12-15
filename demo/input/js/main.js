// create angular app
	angular.module('validationApp', [])

	// create angular controller
	.controller('mainController', function($scope) {
		$scope.userdata={};
		// function to submit the form after all validation has occurred			
		$scope.submitForm = function() {
			console.log($scope.userdata);
			// if($scope.userForm.$invalid)
			//  {
			// 	alert('错误')
			// }
			// else{
			// 	alert('提交成功')
			// }
		};

	})
	.directive('compare',function(){
		var o={};
		o.strice='AE';
		o.scope = {
			orgText:'=compare'
		};
		o.requeire = 'ngModel';
		o.link=function(sco,ele,att,con){
			con.$validators.compare = function(v){
				return v==sco.orgText;
			};
			sco.$watch('orgText',function(){
				con.$validate();
			})
		};
		return o;
	})
	.directive('phone', function () {
		return {
			require: 'ngModel',
			scope:{
				orgText:'=phone'
			},
			link: function (scope, ele, attrs, ctrl) {
				ctrl.$validators.phone = function (modelValue, viewValue) {
					return viewValue==scope.orgText;
				};
				scope.$watch('orgText',function(){
					ctrl.$validate();
				})
			}
		}
	})
