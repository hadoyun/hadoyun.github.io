const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

//array 만드는 법
const toDos = [];

function saveTodo(){
    //값을 string으로 저장하고 싶을때 사용하는 함수 JSON.stringify()
    //그 반대는 JSON.parse()
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
    //이벤트의 부모 노드를 확인하는 방법★
    //console.log(event.target.parentElement.innerText);

    //지워야하는 li
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(newTodo){
    //li 안에 태그를 만들기 위해서 li 생성과 동시에 element를 가져온다.
    const li = document.createElement("li");
    //span을 만들고 그 안에 새로운 todo 추가
    const span = document.createElement("span");
    span.innerText = newTodo;
    //버튼 생성 후 X 이모지 추가
    const button = document.createElement("button");
    button.innerText ="❌";
    button.addEventListener("click", deleteTodo);

    //li에 생성된 span / button을 추가
    li.appendChild(span);
    li.appendChild(button);

    //todoList에 새로 만들어진 li 추가
    todoList.appendChild(li);

}

function handleTodoSubmit(event){
    event.preventDefault();
    //input으로 들어온 값 임시저장
    const newTodo = todoInput.value; 
    //input 창 비워주기
    todoInput.value = "";

    toDos.push(newTodo);
    paintTodo(newTodo);
    saveTodo();
}


todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    //console.log(parsedTodos);
    parsedTodos.forEach((item) => console.log("this is turn of ", item));
}