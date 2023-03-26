import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/TodoReducer";

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del alma',
    //     done: false,
    // },

];

const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || []
}

const useTodos = () => {

    
    
    
    const [todos, dispatch] = useReducer(todoReducer, [], init);
    const todosCount = todos.length;
    const pendingTodosCount = todos.filter(todo => !todo.done).length
    

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) )
    }, [todos]);


    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch(action)
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }

    const handleToggleTodo = ( id ) => {
        // console.log({ id })
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount,
        pendingTodosCount,
    }



        
}

export default useTodos
