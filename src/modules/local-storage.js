
export const getLocalTodos = () => {
    let todos 
        if(localStorage.getItem('todos') === null) {
            todos = []
        } else {
            todos = JSON.parse(localStorage.getItem('todos'))
        }    return todos            
    }



export const addLocalTodo = (todo) => {
    let todos = getLocalTodos()
    todos.push(todo)
    
    return localStorage.setItem('todos', JSON.stringify(todos))
            
    }
    
export  const removeLocalTodo = (todoText) => {
    let todos = getLocalTodos()
    todos.forEach((todo, index) => {
                if(todo.name === todoText) {
                    todos.splice(index, 1)
                }
            })

    return localStorage.setItem('todos', JSON.stringify(todos))
    
    }