import React from 'react';
import './TodoCounter.css';

function TodoCounter({completedTodos, totalTodos, loading}) {

    return (
        totalTodos === 0 ?
        <h1 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
            Agrega una primer tarea...
        </h1> 
        : 
        totalTodos === completedTodos ?
        <h1 className='TodoCounter todoCounter--completed'>
            Felicitaciones, Has completado todos los TODOs vuelve a crear otro.
        </h1>
        :
        <h1 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
            Has completado <span>{completedTodos}</span>  de <span>{totalTodos}</span> TODOS
        </h1>
    );
}
export { TodoCounter };  