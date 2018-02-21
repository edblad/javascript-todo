const todoInput = document.getElementById('todoInput');
const submitTodo = document.getElementById('submitTodo');
const todoList = document.getElementById('todoList');
const completedList = document.getElementById('completedList');
const deleteAllButton = document.getElementById('deleteAll');


// Event listener for the add todo button
submitTodo.addEventListener('click', function(event){
    event.preventDefault();
    //createTodo(todoInput.value);
    
    // Only add todo if it doesn't already exist
    if(!todos.includes(todoInput.value)){ 
        addTodo();
        showTodo();
    };
});

const todos = [];

//function Todo(todo){
//    this.todo = todo;
//    this.completed = false;
//}


for(i = 0; i < localStorage.length; i++){
    let todo = '';
    todo = localStorage.getItem('todo' + i);
    todos.push(todo);
    
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

console.log(todos);

/////// FUNCTIONS ///////
function addTodo(){
    //const newTodo = new Todo(todoInput.value, todoInput.value)
    todos.push(todoInput.value);
    
    for(i = 0; i < todos.length; i++){
        localStorage.setItem('todo' + i, todos[i]);
        const todo = localStorage.getItem('todo' + i);
    };
    console.log(todos);
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

    if(todoList.children.length != 0){
        deleteAllButton.classList.add('show');
        deleteAllButton.addEventListener('click', deleteAll);
    };

    todoInput.value = '';
};


/*  Create a new todo
 *  This will run when the user clicks on the "submitTodo"/Lägg till */
//function createTodo(input){
//    if(input){
//        const todoItem = document.createElement('li');
//        const todoText = document.createTextNode(input);
//        const deleteButton = document.createElement('button');
//        const completeButton = document.createElement('button');
//        
//        todos.push(input);
//        localStorage.setItem('todos', todos);
//        
//        completeButton.classList.add('completeButton');
//        completeButton.innerHTML = '&#10004;';
//        completeButton.addEventListener('click', completeTodo);
//        
//        deleteButton.classList.add('deleteButton');
//        deleteButton.innerHTML = '&#10008;';
//        deleteButton.addEventListener('click', deleteTodo);
//
//        todoItem.classList.add('todo');
//        todoItem.appendChild(completeButton);
//        todoItem.appendChild(todoText);
//        todoItem.appendChild(deleteButton);
//
//        todoList.appendChild(todoItem);
//        
//        const deleteAllButton = document.getElementById('deleteAll');
//        if(todoList.children.length != 0){
//            deleteAllButton.classList.add('show');
//            deleteAllButton.addEventListener('click', deleteAll);
//        };
//        
//        todoInput.value = '';
//    };
//};

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
    
    // Hide "Delete all" button when the last todo is completed
    if(todoList.children.length == 0){
        deleteAllButton.classList.remove('show');
    };
    
    for(i = 0; i < todos.length; i++){
        console.log(todos[i]);
    };
    console.log(todos);
};

//function deleteFromArray(){
//    const todoName = String(this.previousSibling.innerText);
//    
//    var index = todos.indexOf(todoName);
//    
//    if(todos[index] == todoName){
//        todos.splice(index, 1);
//
//    }; 
//    console.log(todos);
//    deleteTodo();
//};
    

// Delete the clicked item from the ul, array and local storage
function deleteTodo(){
    this.parentElement.remove(); // Remove from ul
    
    const todoName = String(this.previousSibling.innerText);
    var index = todos.indexOf(todoName);
    
    if(todos[index] == todoName){
        todos.splice(index, 1);
    };
    
    for (let i = 0, iC = localStorage.length; i < iC; ++i) { 
        var storageKey = localStorage.key(i);
        console.log( storageKey + ': ' + localStorage.getItem(storageKey) );
        localStorage.removeItem(storageKey + ': ' + localStorage.getItem(storageKey));
    }
    
    console.log(todos);

    // Hide "Delete all" button when the last todo is deleted
    if(todoList.children.length == 0){
        deleteAllButton.classList.remove('show');
    };
};
 
// Delete all todo items from the todo list
function deleteAll(){
    todoList.innerHTML = '';
    const todos = [];
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