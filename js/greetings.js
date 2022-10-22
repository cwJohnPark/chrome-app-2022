const HIDDEN_CLASS_NAME = "hidden";
const USERNAME_KEY = "username";

const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

function saveUsername(username) {
  localStorage.setItem(USERNAME_KEY, username);
}
function getUsername() {
  return localStorage.getItem(USERNAME_KEY);
}
function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASS_NAME);
  greeting.innerText = `Hello! ${username}`;
}

function onLoginSubmit(event) {
  event.preventDefault();

  const username = loginForm.querySelector("input").value;

  loginForm.classList.add(HIDDEN_CLASS_NAME);
  saveUsername(username);

  paintGreetings(username);
  loadTodoFormOnFirst();
}

function hiddenLoginForm() {
  loginForm.classList.add(HIDDEN_CLASS_NAME);
}

const savedUserName = getUsername();

function loadLoginFormOnFirst() {
  if (savedUserName === null) {
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLoginSubmit);
  } else {
    hiddenLoginForm();
    paintGreetings(savedUserName);
    loadTodoFormOnFirst();
  }
}

loadLoginFormOnFirst();
