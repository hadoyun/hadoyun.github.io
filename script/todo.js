const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

//array 만드는 법
//업데이트 가능하도록 let으로 변경
let toDos = [];

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
    //filter 함수를 사용해서 li의 아이디와 같은 todo.id를 함수에서 제외한 함수를 만들고 저장한다.
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodo();
    
    li.remove();
}

function paintTodo(newTodo){
    //li 안에 태그를 만들기 위해서 li 생성과 동시에 element를 가져온다.
    const li = document.createElement("li");
    li.id = newTodo.id;
    //span을 만들고 그 안에 새로운 todo 추가
    const span = document.createElement("span");
    span.innerText = newTodo.text;
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
    const newTodoObj ={
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    //console.log(parsedTodos);
    //parsedTodos의 각 배열의 항목을 인수로 paintTodo를 실행한다.
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}

