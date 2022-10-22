const toDo = document.getElementById("todo");
const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODO_STORAGE_KEY = "todos";
const USERNAME_STORAGE_KEY = "username";

class ToDo {
  constructor(todo) {
    this.id = createUUID();
    this.content = todo;
  }
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = new ToDo(toDoInput.value);
  toDoInput.value = "";
  paintToDo(newToDo);
  saveToDo(newToDo);
}

function paintToDos(toDoList) {
  toDoList.forEach((todo) => paintToDo(todo));
}

function paintToDo(todo) {
  const button = document.createElement("i");

  button.classList.add("fa-solid");
  button.classList.add("fa-xmark");
  button.classList.add("todo-remove-btn");

  button.addEventListener("click", handleRemoveTodo);

  const span = document.createElement("span");
  span.innerText = todo.content;
  span.setAttribute("id", todo.id);

  const li = document.createElement("li");
  li.appendChild(button);
  li.appendChild(span);

  toDoList.appendChild(li);
}

function findAllToDosFromStorage() {
  const savedToDos = localStorage.getItem(TODO_STORAGE_KEY);
  if (savedToDos == null) {
    return [];
  }
  return JSON.parse(savedToDos);
}

function saveToDos(todos) {
  localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos));
}

function saveToDo(newTodo) {
  const savedToDos = findAllToDosFromStorage();
  savedToDos.push(newTodo);
  saveToDos(savedToDos);
}

function handleRemoveTodo(event) {
  const li = event.target.parentElement;
  li.remove();

  const toDoId = li.querySelector("span").id;
  removeToDo(toDoId);
}

function removeToDo(todoId) {
  const savedToDos = findAllToDosFromStorage();
  removedToDos = savedToDos.filter((todo) => todo.id != todoId);
  saveToDos(removedToDos);
}

/* Load */
function loadToDosOnFirst() {
  loadTodoFormOnFirst();
  const savedToDosString = findAllToDosFromStorage();
  if (savedToDosString.length === 0) {
    return;
  }

  paintToDos(savedToDosString);
}
function loadTodoFormOnFirst() {
  const username = localStorage.getItem(USERNAME_STORAGE_KEY);
  if (username == null) {
    return;
  }
  toDo.classList.remove("hidden");
}

toDoForm.addEventListener("submit", handleToDoSubmit);

loadToDosOnFirst();
