const todoForm = document.querySelector("#todo-form");
const todoForm = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

function handleTodoSubmit(event){
    event.preventDefault();
}

todoForm.addEventListener("submit", handleTodoSubmit);