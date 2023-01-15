import React, { useEffect, useReducer, useState } from 'react'
import { useTodo } from '../hooks';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del alma',
    //     done: false
    // },
    // {
    //     id: new Date().getTime()*3,
    //     description: 'Recolectar la piedra del tiempo',
    //     done: false
    // }
]

export const TodoApp = () => {

    const {todos, totalTodos, pendingTodos, handleDelete, handleToggleTodo, handleAddTodo} = useTodo();

    return (
        <>
            <h1>TodoApp: {totalTodos} <small>penditnes: {pendingTodos}</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} handleDelete={handleDelete} onToggleTodo={handleToggleTodo}/>
                </div>
            <div  className="col-5">
                <h4>Agregar TODO</h4>
                <hr/>
                <TodoAdd handleAddTodo={handleAddTodo}/>
            </div>
            </div>
        </>
    )
}
