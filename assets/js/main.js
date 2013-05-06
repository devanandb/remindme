


function TodoCtrl() {
    var scope = this;
    
    // initialize controller's model    
    this.todos = [{
        text: "Tax Filing",
        done: true,
        time:"In 1 hour"
        },
    {
        text: "Buy Milk",
        done: false,
        time:"3 Hours"
        },
    {
        text: "Send Presentation",
        done: false,
        time:"At night"
        }];
    
    // Define member functions
    this.addTodo = function() {
        scope.todos.push({
            text: scope.todoText,
            done: false
        });
        scope.remaining++;
        scope.todoText = "";
    };

    this.recalc = function() {
        scope.remaining = scope.todos.length;
        angular.forEach(scope.todos, function(todo) {
            if (todo.done) {
                scope.remaining--;
            }
        });
    };

    this.removeDone = function() {
        var todos = scope.todos;
        scope.todos = [];
        
        angular.forEach(todos, function(todo) {
            if (!todo.done) {
                scope.todos.push(todo);
            }
        });
    };
    this.moreDet = function() {
        /*alert("wassuup")*/
        $(".maincontent").load("moredet.html");
    }

    // call recalc once to update the model's 'remaining' value
    // Note: this needs to be called after definition
    this.recalc();
}