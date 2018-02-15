//***** VARIABLES *****//
const todoInput = document.getElementById('todoInput'); 
const submitTodo = document.getElementById('submitTodo');
const todoList = document.getElementById('todoList');
const completedList = document.getElementById('completedList');
const deleteAll = document.getElementById('deleteAll');


//***** EVENT LISTENERS *****//

// Event listener for the 
submitTodo.addEventListener('click', function(event){
    event.preventDefault();
    createTodo(todoInput.value);
});

deleteAll.addEventListener('click', function(){
    todoList.innerHTML = '';
});


//***** FUNCTIONS *****//

// Create a new todo
// This will run when the user clicks on the "submitTodo"
function createTodo(input){
    if(todoInput.value != ''){
        const todoItem = document.createElement('li');
        const todoText = document.createTextNode(input);
        const deleteButton = document.createElement('button');
        //const completeButton = document.createElement('input');
        const completeButton = document.createElement('button');

        //completeButton.type = 'checkbox';
        completeButton.classList.add('completeButton');
        completeButton.innerHTML = '&#10004;';
        completeButton.addEventListener('click', function(){
            const completedItem = document.createElement('li');

            deleteButton.classList.add('deleteButton');
            deleteButton.addEventListener('click', deleteTodo);

            completedItem.innerHTML = input;
            completedItem.classList.add('completed');
            completedItem.classList.add('todo');
            completedItem.appendChild(deleteButton);
            completedList.appendChild(completedItem);

            this.parentElement.remove();
        });

        deleteButton.classList.add('deleteButton');
        deleteButton.innerText = "X";
        deleteButton.addEventListener('click', deleteTodo);

        //todoItem.innerText = input;
        todoItem.classList.add('todo');
        todoItem.appendChild(completeButton);
        todoItem.appendChild(todoText);
        todoItem.appendChild(deleteButton);

        todoList.appendChild(todoItem);

        addIdToItem();

        todoInput.value = '';
    }
};

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