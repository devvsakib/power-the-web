import { useReducer, useEffect } from "react";
import { todoReducer } from '../08-useReducer/todoReducer'

export const useTodo = () => {
    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }
    const initialState = [];
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    

    const handleDelete = (id) => {
        dispatch({
            type: 'Delete todo',
            payload: {
                id
            }
        
        });
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: 'Toggle todo',
            payload: {
                id
            }
        
        });
    }

    const handleAddTodo = (todoText) => {
        dispatch({
            type:'Add new todo',
            payload: {
                id: new Date().getTime(),
                description: todoText,
                done: false
            }
        });
    }

    return {
        todos,
        totalTodos: todos.length,
        pendingTodos: todos.filter(todo => !todo.done).length,
        handleDelete,
        handleToggleTodo,
        handleAddTodo
    }
}