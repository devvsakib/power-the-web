import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos, handleDelete, onToggleTodo}) => {
  return (
    <ul className="list-group">
    {
        todos.map(todo => (
            <TodoItem done={todo.done} key={todo.id} id={todo.id} onToggleTodo={onToggleTodo} onDeleteTodo={() => handleDelete(todo.id)} description={todo.description}/>
        ))
    }
</ul>
    )
}
