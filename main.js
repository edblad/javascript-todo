const todoInput = document.getElementById('todoInput');
const submitTodo = document.getElementById('submitTodo');
const todoList = document.getElementById('todoList');
const completedList = document.getElementById('completedList');


// Event listener for the add todo button
submitTodo.addEventListener('click', function(event){
    event.preventDefault();
    //createTodo(todoInput.value);
    addTodo();
    showTodo();
});

const todos = [];

for(i = 0; i < localStorage.length; i++){
    let html = '';
    html = html + localStorage.getItem('todo' + i);
    console.log(html);
};

//var html = localStorage.getItem('todo');
//todoList.innerHTML = html;

function addTodo(){
    todos.push(todoInput.value);
    for(i = 0; i < todos.length; i++){
        localStorage.setItem('todo' + i, todos[i]);
    };
};

function showTodo(){
    const todoItem = document.createElement('li');
    let todoText = '';
    const deleteButton = document.createElement('button');
    const completeButton = document.createElement('button');
    
    for(let todo of todos){
        todoText = document.createTextNode(todo);
    };
    
    completeButton.classList.add('completeButton');
    completeButton.innerHTML = '&#10004;';
    completeButton.addEventListener('click', completeTodo);

    deleteButton.classList.add('deleteButton');
    deleteButton.innerHTML = '&#10008;';
    deleteButton.addEventListener('click', deleteTodo);

    todoItem.classList.add('todo');
    todoItem.appendChild(completeButton);
    todoItem.appendChild(todoText);
    todoItem.appendChild(deleteButton);

    todoList.appendChild(todoItem);

    const deleteAllButton = document.getElementById('deleteAll');
    if(todoList.children.length != 0){
        deleteAllButton.classList.add('show');
        deleteAllButton.addEventListener('click', deleteAll);
    };
    
    todoInput.value = '';
    
    for(i = 0; i < todos.length; i++){
        console.log(todos[i]);
    };
};

/////// FUNCTIONS ///////
/*  Create a new todo
 *  This will run when the user clicks on the "submitTodo"/Lägg till */
function createTodo(input){
    if(input){
        const todoItem = document.createElement('li');
        const todoText = document.createTextNode(input);
        const deleteButton = document.createElement('button');
        const completeButton = document.createElement('button');
        
        todos.push(input);
        localStorage.setItem('todos', todos);
        
        completeButton.classList.add('completeButton');
        completeButton.innerHTML = '&#10004;';
        completeButton.addEventListener('click', completeTodo);
        
        deleteButton.classList.add('deleteButton');
        deleteButton.innerHTML = '&#10008;';
        deleteButton.addEventListener('click', deleteTodo);

        todoItem.classList.add('todo');
        todoItem.appendChild(completeButton);
        todoItem.appendChild(todoText);
        todoItem.appendChild(deleteButton);

        todoList.appendChild(todoItem);
        
        const deleteAllButton = document.getElementById('deleteAll');
        if(todoList.children.length != 0){
            deleteAllButton.classList.add('show');
            deleteAllButton.addEventListener('click', deleteAll);
        };
        
        todoInput.value = '';
    };
};

// This will run when the user clicks on the complete todo button
function completeTodo(){
    const completedItem = this.parentElement;
    completedList.appendChild(completedItem);
    completedItem.removeChild;

    const deleteAllCompletedButton = document.getElementById('deleteAllCompleted');
    if(completedList.children.length != 0){
        deleteAllCompletedButton.classList.add('show');
        deleteAllCompletedButton.addEventListener('click', deleteAllCompleted);
    };
    
    const deleteAllButton = document.getElementById('deleteAll');
    if(todoList.children.length == 0){
        deleteAllButton.classList.remove('show');
    };
    
    for(i = 0; i < todos.length; i++){
        console.log(todos[i]);
    };
};

// Delete the clicked item from the ul
function deleteTodo(){
    this.parentElement.remove();
    
    const deleteAllButton = document.getElementById('deleteAll');
    if(todoList.children.length == 0){
        deleteAllButton.classList.remove('show');
    };
};
 
// Delete all todo items from the todo list
function deleteAll(){
    todoList.innerHTML = '';
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