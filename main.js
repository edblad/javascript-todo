const todoInput = document.getElementById('todoInput'); 
const submitTodo = document.getElementById('submitTodo');
const todoList = document.getElementById('todoList');
const done = document.createElement('i');
const deleteButton = document.createElement('i');

submitTodo.addEventListener('click', function(event){
    event.preventDefault();
    createTodo();
});


// Create a new todo
// This will run when the user clicks on the "submitTodo"
function createTodo(){
    const todoItem = document.createElement('li');
    const deleteButton = document.createElement('button');
    
    deleteButton.innerText = "X";
    deleteButton.addEventListener('click', deleteTodo);
    
    todoItem.innerText = todoInput.value;
    todoItem.classList.add('todo');
    todoItem.appendChild(deleteButton);
    
    todoList.appendChild(todoItem);
    
    addIdToItem();
};

//function createDeleteButton(){
//    const deleteButton = document.createElement('button');
//    
//    deleteButton.addEventListener('click', deleteTodo);
//    
//    deleteButton.innerText = "X";
//    todoItem.appendChild(deleteButton);
//}


// This function creates a specific ID to each todo item
function addIdToItem(){
    const amountOfTodos = document.getElementsByClassName('todo');
    
    for(var i = 0; i < amountOfTodos.length; i++){
        amountOfTodos[i].id = 'todo' + [i];
    };
};

// This removes the clicked todo item from the ul
//This will run when the user clicks the rubbish bin
function deleteTodo(){
    this.parentElement.remove();
};






// Create a new todo
// This will run when the user clicks on the "submitTodo"
function testAddTodo(){
    const todoItem = document.createElement('li');
    todoItem.innerText = todoInput.value;
    //const text = ` ${addTodo.value} `;
    //const text = document.createTextNode(' ' + todoInput.value + ' ');
    //const done = document.createElement('i');
    //const deleteButton = document.createElement('i');
    
    //todoItem.appendChild(done);
    //todoItem.appendChild(text);
    //todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);
    
    todoItem.classList.add('todo');
    //done.classList.add('fas');
    //done.classList.add('fa-check-circle');
    //deleteButton.classList.add('fas');
    //deleteButton.classList.add('fa-trash');
    const amountOfTodos = document.getElementsByClassName('todo');
    
    todoItem.addEventListener('click', deleteTodo);
    
    for(var i = 0; i < amountOfTodos.length; i++){
        amountOfTodos[i].id = 'todo' + [i];
    }
};

