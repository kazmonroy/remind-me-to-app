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

const Project = (projectName) => {
  const id = Date.now().toString();
  const name = projectName;
  const tasks = [];

  return { id, name, tasks };
};

const Task = (taskName) => {
  const id = Date.now().toString();
  const name = taskName;
  const complete = false;

  return { id, name, complete };
};

const todoListApp = (function () {
  // propertiers
  const taskForm = document.querySelector("[data-task-form]");
  const tasksContainer = document.querySelector("[data-tasks-container]");
  const taskInput = taskForm.querySelector("[data-task-input]");
  const _todosContainer = document.querySelector(".todos-container");
  const _menuBtn = document.querySelector(".burger-menu");
  const _navBar = document.querySelector("nav");
  const _wrapper = document.querySelector(".wrapper");

  //   PROJECTS
  const projectForm = document.querySelector("[data-project-form]");
  const projectNameInput = projectForm.querySelector(
    "[data-project-name-input]"
  );
  const projectsList = document.querySelector("[data-projects-list]");
  const deleteProjectBtn = document.querySelector("[data-delete-project]");
  const deleteCompletedTasksBtn = document.querySelector(
    "[data-delete-completed-tasks]"
  );

  const projectsDisplay = document.querySelector(
    "[data-projects-tasks-display]"
  );
  const projectNameTitle = document.querySelector("[data-project-name-title]");
  const projectTasksContainer = document.querySelector(
    "[data-tasks-container]"
  );
  const LOCAL_STORAGE_PROJECTS_LISTS_KEY = '"projects.lists"';
  const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = '"projects.selectedId"';

  let selectedProjectId = localStorage.getItem(
    LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY
  );

  let projects =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_LISTS_KEY)) || [];

  const saveProjectsLocalStorage = () => {
    localStorage.setItem(
      LOCAL_STORAGE_PROJECTS_LISTS_KEY,
      JSON.stringify(projects)
    );

    localStorage.setItem(
      LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY,
      selectedProjectId
    );
  };

  const renderAndSaveProjects = () => {
    renderUI();
    saveProjectsLocalStorage();
  };

  const renderUI = () => {
    clearContainer(projectsList);
    renderProjectsList();
    renderProjectInfo();
  };

  const renderProjectInfo = () => {
    const projectInfo = projects.find(
      (project) => project.id === selectedProjectId
    );

    if (selectedProjectId === null) {
      projectsDisplay.style.display = "none";
    } else {
      projectsDisplay.style.display = "";
      projectNameTitle.textContent = projectInfo.name;
      clearContainer(projectTasksContainer);
      renderTasks(projectInfo);
    }
  };

  const renderTasks = (projectInfo) => {
    projectInfo.tasks.forEach((task) => {
      //   CheckBox

      const newTask = document.createElement("li");
      newTask.classList.add("task");

      const taskCheck = document.createElement("input");
      taskCheck.setAttribute("type", "checkbox");
      taskCheck.setAttribute("id", task.id);
      taskCheck.dataset.taskId = task.id;
      taskCheck.checked = task.complete;

      const taskContent = document.createElement("label");
      taskContent.setAttribute("for", task.id);
      taskContent.setAttribute("id", task.id);
      taskContent.textContent = task.name;
      taskContent.classList.add("task-text");

      const customCheckBox = document.createElement("span");
      customCheckBox.classList.add("custom-checkbox");

      taskContent.appendChild(customCheckBox);

      newTask.appendChild(taskCheck);
      newTask.appendChild(taskContent);

      return tasksContainer.appendChild(newTask);
    });
  };

  const renderProjectsList = () => {
    projects.forEach((project) => {
      const newProject = document.createElement("li");
      newProject.textContent = project.name;
      newProject.classList.add("project-link");
      newProject.dataset.projectId = project.id;
      if (project.id === selectedProjectId) {
        newProject.classList.add("active");
      }

      projectsList.appendChild(newProject);
    });
  };

  const clearContainer = (projectListContainer) => {
    while (projectListContainer.firstChild) {
      projectListContainer.removeChild(projectListContainer.firstChild);
    }
  };

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskName = taskInput.value;
    if (taskName === null || taskName == "") return;

    const newTask = Task(taskName);

    taskInput.value = "";
    const currentProject = projects.find(
      (project) => project.id === selectedProjectId
    );

    currentProject.tasks.push(newTask);
    renderAndSaveProjects();
  });

  tasksContainer.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "input") {
      const currentProject = projects.find(
        (project) => project.id === selectedProjectId
      );

      const selectedTask = currentProject.tasks.find(
        (task) => task.id === e.target.id
      );

      //   selectedTask.complete = true;
      selectedTask.complete = e.target.checked;

      saveProjectsLocalStorage();
    }
  });

  projectForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const projectName = projectNameInput.value;

    if (projectName === null || projectName == "") return;

    const newProject = Project(projectName);

    projects.push(newProject);

    projectNameInput.value = "";

    renderAndSaveProjects();
  });

  projectsList.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "li") {
      selectedProjectId = e.target.dataset.projectId;
      renderAndSaveProjects();
    }
  });

  deleteProjectBtn.addEventListener("click", (e) => {
    projects = projects.filter((project) => project.id !== selectedProjectId);
    selectedProjectId = null;
    renderAndSaveProjects();
  });

  deleteCompletedTasksBtn.addEventListener("click", (e) => {
    const currentProject = projects.find(
      (project) => project.id === selectedProjectId
    );

    currentProject.tasks = currentProject.tasks.filter(
      (task) => !task.complete
    );

    renderAndSaveProjects();
    console.log(currentProject);
  });

  //   *************************************

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

    return tasksContainer.appendChild(newTodo);
  };

  // Create & add todo

  const _appendNewTodoUI = (taskInput) => {
    let todoText = taskInput.value;

    if (todoText == "" || todoText === null) {
      return false;
    } else {
      const todo = Todo(todoText);
      taskInput.value = "";

      addLocalTodo(todo);
      _addTodosUI(todo);
    }
  };

  const _submitTodo = (e) => {
    e.preventDefault();

    return _appendNewTodoUI(taskInput);
  };

  // Remove todo

  //   const _removeTodo = (e) => {
  //     const todoText = e.target.parentNode.firstChild.nextSibling.textContent;

  //     if (e.target.classList.contains("remove-btn")) {
  //       e.target.parentNode.remove();
  //       removeLocalTodo(todoText);
  //     }
  //   };

  // Edit todo

  const _editTodo = (e) => {
    const taskInput = e.target.parentNode.firstChild;

    if (e.target.classList.contains("edit-btn")) {
      taskInput.toggleAttribute("contenteditable");
      taskInput.classList.toggle("edit");
    }

    taskInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        taskInput.toggleAttribute("contenteditable");
        taskInput.classList.toggle("edit");
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
      //   _removeTodo(e);
      _editTodo(e);
    });
  };

  const start = () => {
    taskForm.addEventListener("submit", _submitTodo);
    _displayTodos();
    _buttonsEvents();
    _toggleNavBar();

    // practice
    renderUI();
  };

  return { start };
})();

todoListApp.start();
