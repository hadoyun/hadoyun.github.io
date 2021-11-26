const input = document.querySelector("#login-form input");
const inputbts = document.querySelector("#login-form button");

const greeting = document.querySelector("#greeting");

const HIDDEN = "hidden";

const USERNAME = input.value;

function loging(event){
    //새로고침 방지
    // event.preventDefault();
    // localStorage.setItem("유저이름", input.value);
    // input.classList.add(HIDDEN);
    // greeting.classList.remove(HIDDEN);
}

inputbts.addEventListener("click", loging);
// window.addEventListener("submit", loging);

//inputbts.addEventListener("click", loging);