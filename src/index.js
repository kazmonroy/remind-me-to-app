import "./assets/style.css";

const Todo = ((text) => {
    const name = text
  
    return {name}

})


const todoListApp = (function () {
    // propertiers
    const _form = document.querySelector("form");
    const _todoList = document.querySelector(".todo-list");
    const _todoInput = document.querySelector('input[name="todo"]');
    const _todosContainer = document.querySelector(".todos-container");

    // Local Storage

    const _todosLocalStorage = (() => {
        const getLocalTodos = () => {
            let todos 

            if(localStorage.getItem('todos') === null) {
                todos = []
            } else {
                todos = JSON.parse(localStorage.getItem('todos'))
            }

            return todos
        }

        const addLocalTodo = (todo) => {
            const todos = getLocalTodos()
            todos.push(todo)

            return localStorage.setItem('todos', JSON.stringify(todos))
        }

        const removeLocalTodo = (todoText) => {
            const todos = getLocalTodos()

            todos.forEach((todo, index) => {
   
                if(todo.name === todoText) {
                
                    todos.splice(index, 1)
                }
            })

           return localStorage.setItem('todos',JSON.stringify(todos) )

        }

        return {getLocalTodos, addLocalTodo, removeLocalTodo}
    })()




    // Display Todos in UI

    const displayTodos = () => {
        const storedTodos = _todosLocalStorage.getLocalTodos()
        
        // [
        //     {
        //         name: 'Study'
        //     },

        //     {
        //         name: 'Be awesome'
        //     },
        //     {
        //         name: 'Watch supernatural'
        //     }
        // ]

        const todos = storedTodos

        todos.forEach(todo => {
            _addStoredTodosUI(todo)

        })
       
    }

    const _addStoredTodosUI = (todo) => {
        const newTodo = document.createElement("li");
            newTodo.classList.add("todo");
        
            const todoText = document.createElement("p");
            todoText.textContent = todo.name;
            todoText.classList.add("todo-text");
        
            const removeBtn = document.createElement("button");
            removeBtn.classList.add("remove-btn");
            removeBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        
            const editBtn = document.createElement("button");
            editBtn.classList.add("edit-btn");
            editBtn.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
        
            newTodo.appendChild(todoText);
            newTodo.appendChild(removeBtn);
            newTodo.appendChild(editBtn);
            

            return _todoList.appendChild(newTodo)

    }

    // Create & add todo
  
    const _getTodoValue = () => {
      if (_todoInput.value == "") {
        console.log("empty");
        return false;
      } else {
        const todo = Todo(_todoInput.value);
        _todoInput.value = "";
        _todosLocalStorage.addLocalTodo(todo)
  
        return todo.name;
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
  
      return _todoList.appendChild(newTodo)
    };
  
    const _appendNewTodoUI = (_todoInput) => {
      if (_todoInput.value == "") {
        return false;
      } else {
        _createNewTodo()
      }
    };
  
    const _submitTodo = (e) => {
      e.preventDefault();
  
      return _appendNewTodoUI(_todoInput);
    };
  
    // Remove todo
  
    const _removeTodo = (e) => {
        const todoText = e.target.parentNode.firstChild.textContent;
      if (e.target.classList.contains("remove-btn")) {
        e.target.parentNode.remove()

        _todosLocalStorage.removeLocalTodo(todoText)


  
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
  
    return { start, buttonsEvents, displayTodos };
  })();
  
  todoListApp.start();
  todoListApp.displayTodos()
  todoListApp.buttonsEvents();

  

