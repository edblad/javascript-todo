const todoInput = document.getElementById('todoInput');
const submitTodo = document.getElementById('submitTodo');
const todoList = document.getElementById('todoList');
const completedList = document.getElementById('completedList');
const deleteAllButton = document.getElementById('deleteAll');
const deleteAllCompletedButton = document.getElementById('deleteAllCompleted');

let todos = [];
let completed = [];

loadTodos();

// Event listener for the add todo button
submitTodo.addEventListener('click', function(event){
    event.preventDefault();
    
    // Only add todo if it doesn't already exist
    if(todoInput.value){
        if(!todos.includes(todoInput.value)){ 
            addTodo();
            showTodo();
        };
    };
});

function loadTodos(){
    
    const todosData = localStorage.getItem('todos');
    const completedData = localStorage.getItem('completed');
    
    if(todosData){
        todos = JSON.parse(todosData);
        completed = JSON.parse(completedData); 
    }
    
    for(i = 0; i < todos.length; ++i){
        let todo = '';
        todo = todos[i];

        const todoItem = document.createElement('li');
        const paragraph = document.createElement('p');    
        var todoText = document.createTextNode(todo);
        paragraph.appendChild(todoText);
        const deleteButton = document.createElement('button');
        const completeButton = document.createElement('button');

        completeButton.classList.add('completeButton');
        completeButton.innerHTML = '&#10004;';
        completeButton.addEventListener('click', completeTodo);

        deleteButton.classList.add('deleteButton');
        deleteButton.innerHTML = '&#10008;';
        deleteButton.addEventListener('click', deleteTodo);

        todoItem.classList.add('todo');
        todoItem.appendChild(completeButton);
        todoItem.appendChild(paragraph);
        todoItem.appendChild(deleteButton);
        todoList.appendChild(todoItem);
    };
    
    for(i = 0; i < completed.length; ++i){
        let completedTodo = '';
        completedTodo = completed[i];

        const todoItem = document.createElement('li');
        const paragraph = document.createElement('p');    
        var todoText = document.createTextNode(completedTodo);
        paragraph.appendChild(todoText);
        const deleteButton = document.createElement('button');
        const completeButton = document.createElement('button');

        completeButton.classList.add('completeButton');
        completeButton.innerHTML = '&#10004;';
        completeButton.addEventListener('click', completeTodo);

        deleteButton.classList.add('deleteButton');
        deleteButton.innerHTML = '&#10008;';
        deleteButton.addEventListener('click', deleteTodo);

        todoItem.classList.add('todo');
        todoItem.appendChild(completeButton);
        todoItem.appendChild(paragraph);
        todoItem.appendChild(deleteButton);
        completedList.appendChild(todoItem);
    };
};

/////// FUNCTIONS ///////
function addTodo(){
    todos.push(todoInput.value);
    localStorage.setItem('todos', JSON.stringify(todos));
};

function showTodo(){
    const todoItem = document.createElement('li');
    const deleteButton = document.createElement('button');
    const completeButton = document.createElement('button');
    const paragraph = document.createElement('p');
    const todoText = document.createTextNode(todoInput.value);

    paragraph.appendChild(todoText);

    completeButton.classList.add('completeButton');
    completeButton.innerHTML = '&#10004;';
    completeButton.addEventListener('click', completeTodo);

    deleteButton.classList.add('deleteButton');
    deleteButton.innerHTML = '&#10008;';
    deleteButton.addEventListener('click', deleteTodo);

    todoItem.classList.add('todo');
    todoItem.appendChild(completeButton);
    todoItem.appendChild(paragraph);
    todoItem.appendChild(deleteButton);

    todoList.appendChild(todoItem);

    showDeleteButton();
//    if(todoList.children.length != 0){
//        deleteAllButton.classList.add('show');
//        deleteAllButton.addEventListener('click', deleteAll);
//    };

    todoInput.value = '';
};

function showDeleteButton(){
    if(todoList.children.length != 0){
        deleteAllButton.classList.add('show');
        deleteAllButton.addEventListener('click', deleteAll);
    };
    
    if(completedList.children.length != 0){
        deleteAllCompletedButton.classList.add('show');
        deleteAllCompletedButton.addEventListener('click', deleteAllCompleted);
    };
}

// This will run when the user clicks on the complete todo button
function completeTodo(){
    
    const completedItem = this.parentElement;
    completedList.appendChild(completedItem);
    completedItem.removeChild;
    
   // this.parentElement.remove(); // Remove from ul
    
    const todoName = String(this.nextSibling.innerText);
    var index = todos.indexOf(todoName);
    
    if(todos[index] == todoName){
        todos.splice(index, 1);
        completed.push(todoName);
    };
    
    localStorage.setItem('completed', JSON.stringify(completed));
    localStorage.setItem('todos', JSON.stringify(todos));
      
    showDeleteButton();
    
    // Hide "Delete all" button when the last todo is completed
    if(todoList.children.length == 0){
        deleteAllButton.classList.remove('show');
    };
};
    

// Delete the clicked item from the ul, array and local storage
function deleteTodo(){
    this.parentElement.remove(); // Remove from ul
    
    const todoName = String(this.previousSibling.innerText);
    var index = todos.indexOf(todoName);
    
    if(todos[index] == todoName){
        todos.splice(index, 1);
    };
    
    localStorage.setItem('todos', todos);
    
   // console.log(todos);

    // Hide "Delete all" button when the last todo is deleted
    if(todoList.children.length == 0){
        deleteAllButton.classList.remove('show');
    };
};
 
// Delete all todo items from the todo list
function deleteAll(){
    todoList.innerHTML = '';
    todos = [];
    localStorage.clear();
    this.classList.remove('show');
};

// Delete all todo items from the completed list
function deleteAllCompleted(){
    completedList.innerHTML = '';
    this.classList.remove('show');
};





// This function creates a specific ID to each todo item, totally useless function
//function addIDToItem(){
//    const amountOfTodos = document.getElementsByClassName('todo');
//    
//    for(var i = 0; i < amountOfTodos.length; i++){
//        amountOfTodos[i].id = 'todo' + [i];
//    };
//};