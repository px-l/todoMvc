(function (angular) {
    var app=angular.module("todoApp")
    app.service("TodoService",["$window",function ($window) {
        var todos=JSON.parse($window.localStorage.getItem("todos")||"[]");
		this.getTodos=function () {
			return todos;
		}
		this.store=function () {
			$window.localStorage.setItem("todos",JSON.stringify(todos))
		}
        this.save=function (text) {
			if(text.trim().length!=0){
				var maxId=0
				todos.forEach(function (todo) {
					if(todo.id>maxId){
						maxId= todo.id
					}
				})
				var todo = {
					id:++maxId,
					text:text.trim(),
					completed:false
				};
				todos.push(todo);
				this.store();
				return todos;
			}
			else{
				return todos;
			}
        }
		this.delate=function(id) {
            var index=-1;
			todos.some(function (todo,i) {
				if(todo.id===id){
                    index=i
                    return true;
				}
            })
            todos.splice(index,1)
			this.store();
        }
        this.clear = function () {
			var arr = [];
			todos.forEach(function (todo) {
				if(!todo.completed){
					arr.push(todo);
				}
			})
			return todos=arr;
		}
    }])
})(angular);
