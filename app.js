//selectors for textinput,button and add to list

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//Event listeners when button is clicked

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);


//Functions

function addTodo(event) {

    //prevent form from submitting
    event.preventDefault();

    //todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //create Li and add it to the above Div
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);

    //create check mark button beside the text

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);


    //create trash button beside the check button

    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-btn');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(trashButton);

    //Append the whole DIV to the UL

    todoList.appendChild(todoDiv);

    //clear input text after adding to the UL
    todoInput.value = '';
}

function deleteCheck(e) {
    //grab the item user clicks
    const item = e.target;

    //delete the item
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement
        todo.remove();
    }


}