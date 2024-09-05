import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext/TodoContext';

function TodoCounter() {

    const {completedTodos, totalTodos} = React.useContext(TodoContext)
    return (
        totalTodos === 0 ?
        <h1 className='TodoCounter'>
            Agrega una primer tarea...
        </h1> 
        : 
        totalTodos === completedTodos ?
        <h1 className='TodoCounter todoCounter--completed'>
            Felicitaciones, Has completado todos los TODOs.
        </h1>
        :
        <h1 className='TodoCounter'>
            Has completado <span>{completedTodos}</span>  de <span>{totalTodos}</span> TODOS
        </h1>
    );
}
export { TodoCounter };  