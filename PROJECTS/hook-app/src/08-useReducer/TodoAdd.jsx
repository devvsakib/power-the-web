import React, { useState } from 'react'

export const TodoAdd = ({handleAddTodo}) => {

  const [todoText, setTodoText] = useState();

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      todoText && handleAddTodo(todoText);
    }}>
      <input
          type="text"
          placeholder="¿Qué hay que hacer?"
          className="form-control"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          />
      <button type="submit" className="btn btn-outline-primary mt-1">
          Agregar
      </button>
    </form>
  )
}
