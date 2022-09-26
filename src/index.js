import "./assets/style.css";

const todoListApp = (function () {
    // propertiers
    const _form = document.querySelector("form");
    const _todoList = document.querySelector(".todo-list");
    const _todoInput = document.querySelector('input[name="todo"]');
    const _todosContainer = document.querySelector(".todos-container");
  
    // Create & add todo
  
    const _getTodoValue = () => {
      if (_todoInput.value == "") {
        console.log("empty");
        return false;
      } else {
        const todo = _todoInput.value;
        _todoInput.value = "";
  
        return todo;
      }
    };
  
    const _createNewTodo = () => {
      const newTodo = document.createElement("li");
      newTodo.classList.add("todo");
  
      const todo = document.createElement("p");
      todo.textContent = _getTodoValue();
      todo.classList.add("todo-text");
  
      const removeBtn = document.createElement("button");
      removeBtn.classList.add("remove-btn");
      removeBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  
      const editBtn = document.createElement("button");
      editBtn.classList.add("edit-btn");
      editBtn.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
  
      newTodo.appendChild(todo);
      newTodo.appendChild(removeBtn);
      newTodo.appendChild(editBtn);
  
      return newTodo;
    };
  
    const _appendTodo = (_todoInput, _todoList) => {
      if (_todoInput.value == "") {
        return false;
      } else {
        _todoList.appendChild(_createNewTodo());
      }
    };
  
    const _submitTodo = (e) => {
      e.preventDefault();
  
      return _appendTodo(_todoInput, _todoList);
    };
  
    // Remove todo
  
    const _removeTodo = (e) => {
      if (e.target.classList.contains("remove-btn")) {
        e.target.parentNode.remove();
      }
    };
  
    // Edit todo
  
    const _editTodo = (e) => {
      const _todoInput = e.target.parentNode.firstChild;
  
      if (e.target.classList.contains("edit-btn")) {
        _todoInput.toggleAttribute("contenteditable");
        _todoInput.classList.toggle("edit");
      }
  
      //   // _todoInput.addEventListener("keypress", (e) => {
      //   //   if (e.key === "Enter") {
      //   //     _todoInput.setAttribute("contenteditable", false);
      //   //     _todoInput.classList.remove("edit");
      //   //   }
      //   // });
    };
  
    const buttonsEvents = () => {
      _todosContainer.addEventListener("click", (e) => {
        _removeTodo(e);
        _editTodo(e);
      });
    };
  
    const start = () => {
      _form.addEventListener("submit", _submitTodo);
    };
  
    return { start, buttonsEvents };
  })();
  
  todoListApp.start();
  todoListApp.buttonsEvents();
  

