(function (angular) {
	angular.module("todoApp")
		.controller("todocTrl",["$scope","TodoService",function ($scope,TodoService) {
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
		}])
})(angular)


