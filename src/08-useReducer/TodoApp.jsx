import React, { useEffect, useReducer } from 'react'
import TodoList from './TodoList';
import { todoReducer } from './TodoReducer';
import TodoAdd from './TodoAdd'
import useTodos from '../hooks/useTodos';

const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos();

    
    

    return (
        <>
            <h1>TodoApp: {todosCount} <small>pendientes: {pendingTodosCount}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                     todos={todos}
                      onDeleteTodo={ handleDeleteTodo }
                      onToggleTodo={ handleToggleTodo }
                      />
                </div>
            </div>

            <div className="col-5">
                <h4>Agregar Todo</h4>
                <hr />
                <TodoAdd 
                onNewTodo={handleNewTodo} 
                />
            </div>


        </>
    )
}

export default TodoApp
