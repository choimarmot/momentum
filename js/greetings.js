const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

 function onLoginSubmit(event) { 
   event.preventDefault();
   loginForm.classList.add(HIDDEN_CLASSNAME);
   const username = loginInput.value;
   localStorage.setItem(USERNAME_KEY, username);
   paintGreetings(username);
 }  // (2)

 function paintGreetings(username) {
   greeting.innerText = `Hello ${username}`;
   greeting.classList.remove(HIDDEN_CLASSNAME);
 } /* username을 인자로 받는 함수, 함수를 호출하는 위치에 따라 유저정보는 다른 곳에서 옴
예) local storage(1)에 유저정보가 있으면 거기서 유저정보를 받아서 인자로 넣어줌
   없다면 form이 submit 되면 input으로부터 유저정보를 받음((2) 로부터)
 */

 const savedusername = localStorage.getItem(USERNAME_KEY); // (1)

 if(savedusername === null) {
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener("submit", onLoginSubmit);
 } else {
   paintGreetings(savedusername);
 }