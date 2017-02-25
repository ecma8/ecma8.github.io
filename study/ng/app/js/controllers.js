var bookStoreCtrls = angular.module('bookStoreCtrls', []);

bookStoreCtrls.controller('HelloCtrl', ['$scope',
    function($scope) {
        $scope.greeting = {
            text: 'Hello'
        };
    }
]);

bookStoreCtrls.controller('BookListCtrl', ['$scope',
    function($scope) {
        $scope.books =[
        	{title:"这是列表一",author:"这是作者一",id:1},
        	{title:"这是列表二",author:"这是作者二",id:2},
        	{title:"这是列表三",author:"这是作者三",id:3}
        ]
    }
]);
bookStoreCtrls.controller('DetailCtrl', ['$scope','$routeParams',
    function($scope,$routeParams) {
        $scope.id=$routeParams.id;
    }
]);
// bookStoreCtrls.controller('BookCtrl',function($scope, $routeParams) {
//     $scope.id = $routeParams.id;
// });
/**
 * 这里接着往下写，如果控制器的数量非常多，需要分给多个开发者，可以借助于grunt来合并代码
 */