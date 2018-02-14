const todoInput = document.getElementById('todoInput'); 
const submitTodo = document.getElementById('submitTodo');
const todoList = document.getElementById('todoList');
const doneList = document.getElementById('done');

submitTodo.addEventListener('click', function(event){
    event.preventDefault();
    createTodo(todoInput.value);
});


// Create a new todo
// This will run when the user clicks on the "submitTodo"
function createTodo(input){
    if(todoInput.value != ''){
        const todoItem = document.createElement('li');
        const deleteButton = document.createElement('button');
        const doneButton = document.createElement('button');

        doneButton.innerText = "Klar";
        doneButton.addEventListener('click', function(){
            const doneItem = document.createElement('li');

            deleteButton.addEventListener('click', deleteTodo);

            doneItem.innerHTML = input;
            doneItem.classList.add('done');
            doneItem.appendChild(deleteButton);
            doneList.appendChild(doneItem);

            this.parentElement.remove();
        });

        deleteButton.innerText = "X";
        deleteButton.addEventListener('click', deleteTodo);

        todoItem.innerText = input;
        todoItem.classList.add('todo');
        todoItem.appendChild(doneButton);
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

//function doneTodo(a){
//    const doneItem = document.createElement('li');
//    doneItem.innerHTML = a;
//    doneList.appendChild(doneItem);
//    console.log(this);
//    
//    //this.parentElement.remove();
//};


// This removes the clicked todo item from the ul
//This will run when the user clicks the rubbish bin
function deleteTodo(){
    this.parentElement.remove();
};