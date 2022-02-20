// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listeners
/*document.addEventListener("DOMContentLoaded", "getTodos");*/
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

// Functions
function addTodo(event) {
  //Prevent form from submitting
  event.preventDefault();
  //Div-Todo
  const todoDIv = document.createElement("div");
  todoDIv.classList.add("todo");
  //Create Li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDIv.appendChild(newTodo);
  /*saveLocalTodos(todoInput.value);*/
  //Completed Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDIv.appendChild(completedButton);
  //Delete Button
  const trashdButton = document.createElement("button");
  trashdButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashdButton.classList.add("trash-btn");
  todoDIv.appendChild(trashdButton);
  //Append to List
  todoList.appendChild(todoDIv);
  //Clear Todo Input Value
  todoInput.value = "";
}

function deleteCheck(myEvent) {
  const item = myEvent.target;
  //Delete
  if (item.classList[0] === "trash-btn") {
    const toDelete = item.parentElement;
    //Animation
    toDelete.classList.add("fall");
    toDelete.addEventListener("transitionend", function () {
      toDelete.remove();
    });
  }

  //Check
  if (item.classList[0] === "complete-btn") {
    const toComplete = item.parentElement;
    toComplete.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}

function saveLocalTodos(todo) {
  let todos;

  if (localStorage.getItem("todos") === null) {
    todo = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
<<<<<<< HEAD
=======
  todos.push(todo);
>>>>>>> 331e107 (local storage)
}

function getTodos() {
  let todos;

  if (localStorage.getItem("todos") === null) {
    todo = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach(function (todo) {
    //Div-Todo
    const todoDIv = document.createElement("div");
    todoDIv.classList.add("todo");
    //Create Li
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    todoDIv.appendChild(newTodo);
    //Completed Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDIv.appendChild(completedButton);
    //Delete Button
    const trashdButton = document.createElement("button");
    trashdButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashdButton.classList.add("trash-btn");
    todoDIv.appendChild(trashdButton);
    //Append to List
    todoList.appendChild(todoDIv);
  });
}

function removeLocalTodos(todo) {
  if (localStorage.getItem("todos") === null) {
    todo = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos, indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}
