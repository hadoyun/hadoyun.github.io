const input = document.querySelector("#login-form input");
const inputbts = document.querySelector("#login-form button");

const greeting = document.querySelector("#greeting");

const HIDDEN = "hidden";

function loging(event){
    //새로고침 방지
    event.preventDefault();
    localStorage.setItem("유저이름", input.value);
    input.classList.add(HIDDEN);
    greeting.classList.remove(HIDDEN);
}

window.addEventListener("submit", loging);