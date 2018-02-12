const addTodo = document.getElementById('addTodo');
const submitTodo = document.getElementById('submitTodo');
const todoList = document.getElementById('todoList');
const done = document.createElement('i');
const deleteTodo = document.createElement('i');

// Add new todos to an unordered list
submitTodo.addEventListener('click', function(event){
    event.preventDefault();
    
    const todoItem = document.createElement('li');
    const text = document.createTextNode(' ' + addTodo.value + ' ');
    const done = document.createElement('i');
    const deleteTodo = document.createElement('i');
    
    todoItem.appendChild(done);
    todoItem.appendChild(text);
    todoItem.appendChild(deleteTodo);
    todoList.appendChild(todoItem);
    
    todoItem.classList.add('todo');
    done.classList.add('fas');
    done.classList.add('fa-check-circle');
    deleteTodo.classList.add('fas');
    deleteTodo.classList.add('fa-trash');
    const amountOfTodos = document.getElementsByClassName('todo');
    
    for(var i = 0; i < amountOfTodos.length; i++){
        amountOfTodos[i].id = 'todo' + [i];
    }
});