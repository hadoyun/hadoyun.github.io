
const loginform = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
//submit 타입을 주면 찾을 필요가 없다.
//const inputbts = document.querySelector("#login-form button");

const greeting = document.querySelector("#greeting");

const HIDDEN = "hidden";

const USERNAME = loginInput.value;

function onSubmit(event){
    //새로고침 방지
    event.preventDefault();
    // localStorage.setItem("유저이름", input.value);
    // input.classList.add(HIDDEN);
    // greeting.classList.remove(HIDDEN);
}

//window.addEventListener("submit", onSubmit);

//submit 은 엔터나 클릭 둘다 반응한다.
loginform.addEventListener("submit", onSubmit);