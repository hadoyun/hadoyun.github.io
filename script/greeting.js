
const loginform = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
//submit 타입을 주면 찾을 필요가 없다.
//const inputbts = document.querySelector("#login-form button");

const greeting = document.querySelector("#greeting");

const HIDDEN = "hidden";

const USERNAME_KEY = "username"

function onSubmit(event){
    const userName = loginInput.value;
    //새로고침 방지
    event.preventDefault();
    localStorage.setItem(USERNAME_KEY, userName);
    loginform.classList.add(HIDDEN);
    paintGreetings();
}

function paintGreetings()
{
    greeting.innerText =`Hello! ${savedUsername}`;
    greeting.classList.remove(HIDDEN);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    //show the form
    loginform.classList.remove(HIDDEN);
    loginform.addEventListener("submit", onSubmit);
}else{
    //show the greeting
    paintGreetings();
}