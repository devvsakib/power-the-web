import React from 'react'

export const TodoItem = ({id, description, onDeleteTodo, onToggleTodo, done}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span onClick={() => onToggleTodo(id)} className={`align-self-center ${done ? 'text-decoration-line-through' : ''}`} >{description}</span>
      <button className="btn btn-danger" onClick={onDeleteTodo}>Borrar</button>
    </li>
  )
}
