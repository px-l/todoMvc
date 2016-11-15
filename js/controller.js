(function (angular) {
	angular.module("todoApp")
		.controller("todocTrl",["$scope","TodoService","$location",function ($scope,TodoService,$location) {
			$scope.title="任务项";
			$scope.todos=TodoService.getTodos();
			$scope.text="";
			$scope.todoFilter={};
			$scope.editId=0;
			$scope.getEdit=function (todo) {
				$scope.editId=todo.id;
			}
			$scope.edit=function (todo) {
				$scope.editId=0;
			}
			$scope.save=function () {
				$scope.todos=TodoService.save($scope.text);
				$scope.text="";
			}
			$scope.delate=function (id) {
				TodoService.delate(id);
			}
			$scope.clear=function () {
				$scope.todos=TodoService.clear();
			}
			$scope.$location=$location;
			$scope.$watch("$location.url()",function (newValue,oldValue) {
				switch (newValue){
					case "/":
						$scope.todoFilter={};
						break;
					case "/active":
						$scope.todoFilter.completed=false;
						break;
					case "/completed":
						$scope.todoFilter.completed=true;
						break;
					default:
						$scope.todoFilter={};
				}
			})

		}])
})(angular)


