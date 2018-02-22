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
        if(!todos.includes(todoInput.value) && !completed.includes(todoInput.value)){ 
            addTodo();
            showTodo();
        };
    };
});


/////// FUNCTIONS ///////

// Loading todos when entering page
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
    
    showDeleteButton();
};

// Add new todo to array and local storage
function addTodo(){
    todos.push(todoInput.value);
    localStorage.setItem('todos', JSON.stringify(todos));
};

// Add new todo to the page
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

    todoInput.value = '';
};

// If lists are not empty, show "Delete all" button
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

// This will run when the user clicks on the complete button
function completeTodo(){
    // Remove from ul
    const completedItem = this.parentElement;
    completedList.appendChild(completedItem);
    completedItem.removeChild;
    
    // Remove from the todo array and add to completed array
    const todoName = String(this.nextSibling.innerText);
    var index = todos.indexOf(todoName);
    if(todos[index] == todoName){
        todos.splice(index, 1);
        completed.push(todoName);
    };
    
    // Update local storage
    localStorage.setItem('completed', JSON.stringify(completed));
    localStorage.setItem('todos', JSON.stringify(todos));
      
    showDeleteButton();
    
    // Hide "Delete all" button when the last todo is completed
    if(todoList.children.length == 0){
        deleteAllButton.classList.remove('show');
    };
};
    

// This will run when the user clicks on the delete button
function deleteTodo(){
    this.parentElement.remove(); // Remove from ul

    // Remove from the todo array
    const todoName = String(this.previousSibling.innerText);
    var index = todos.indexOf(todoName);
    if(todos[index] == todoName){
        todos.splice(index, 1);
    };
    
    localStorage.setItem('todos', JSON.stringify(todos)); // Update local storage
    
    // Remove from the completed array
    const completedName = String(this.previousSibling.innerText);
    var indexCompleted = completed.indexOf(completedName);
    if(completed[indexCompleted] == completedName){
        completed.splice(indexCompleted, 1);
    };
    
    localStorage.setItem('completed', JSON.stringify(completed)); // Update local storage

    // Hide "Delete all" button when the last todo is deleted
    if(todoList.children.length == 0){
        deleteAllButton.classList.remove('show');
    };
};
 
// This will run when the user clicks on the "Delete all" button on the todo list
function deleteAll(){
    todoList.innerHTML = '';                               // Delete from ul
    todos = [];                                            // Delete from array
    localStorage.setItem('todos', JSON.stringify(todos));  // Delete from local storage
    this.classList.remove('show');                         // Remove "Delete all" button
};

// This will run when the user clicks on the "Delete all" button on the todo completed list
function deleteAllCompleted(){
    completedList.innerHTML = '';
    completed = [];
    localStorage.setItem('completed', JSON.stringify(completed));
    this.classList.remove('show');
};
