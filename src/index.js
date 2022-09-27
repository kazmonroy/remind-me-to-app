import "./assets/style.css";
import {
  getLocalTodos,
  addLocalTodo,
  removeLocalTodo,
} from "./modules/local-storage.js";

const Todo = (text) => {
  const name = text;
  const tasks = [];
  return { name, tasks };
};

const todoListApp = (function () {
  // propertiers
  const _form = document.querySelector("form");
  const _todoList = document.querySelector(".todo-list");
  const _todoInput = document.querySelector('input[name="todo"]');
  const _todosContainer = document.querySelector(".todos-container");
  const _menuBtn = document.querySelector(".burger-menu");
  const _navBar = document.querySelector("nav");
  const _navLinks = document.querySelector(".nav-links");
  const _wrapper = document.querySelector(".wrapper");

  // Display Todos in UI

  const _displayTodos = () => {
    const storedTodos = getLocalTodos();
    const todos = storedTodos;

    todos.forEach((todo) => {
      _addTodosUI(todo);
    });
  };

  const _addTodosUI = (todo) => {
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo");

    const todoStatus = document.createElement("div");
    todoStatus.classList.add("todo-status");

    const todoText = document.createElement("p");
    todoText.textContent = todo.name;
    todoText.classList.add("todo-text");

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-btn");
    removeBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';

    newTodo.appendChild(todoStatus);
    newTodo.appendChild(todoText);
    newTodo.appendChild(removeBtn);
    newTodo.appendChild(editBtn);

    return _todoList.appendChild(newTodo);
  };

  // Create & add todo

  const _appendNewTodoUI = (_todoInput) => {
    let todoText = _todoInput.value;

    if (todoText == "" || todoText === null) {
      return false;
    } else {
      const todo = Todo(todoText);
      _todoInput.value = "";

      addLocalTodo(todo);
      _addTodosUI(todo);
    }
  };

  const _submitTodo = (e) => {
    e.preventDefault();

    return _appendNewTodoUI(_todoInput);
  };

  // Remove todo

  const _removeTodo = (e) => {
    const todoText = e.target.parentNode.firstChild.nextSibling.textContent;

    if (e.target.classList.contains("remove-btn")) {
      e.target.parentNode.remove();
      removeLocalTodo(todoText);
    }
  };

  // Edit todo

  const _editTodo = (e) => {
    const _todoInput = e.target.parentNode.firstChild;

    if (e.target.classList.contains("edit-btn")) {
      _todoInput.toggleAttribute("contenteditable");
      _todoInput.classList.toggle("edit");
    }

    _todoInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        _todoInput.toggleAttribute("contenteditable");
        _todoInput.classList.toggle("edit");
      }
    });
  };

  const _toggleNavBar = () => {
    _menuBtn.addEventListener("click", () => {
      _navBar.classList.toggle("collapse");
      _wrapper.classList.toggle("collapse");
    });
  };

  const _buttonsEvents = () => {
    _todosContainer.addEventListener("click", (e) => {
      _removeTodo(e);
      _editTodo(e);
    });
  };

  const start = () => {
    _form.addEventListener("submit", _submitTodo);
    _displayTodos();
    _buttonsEvents();
    _toggleNavBar();
  };

  return { start };
})();

todoListApp.start();
