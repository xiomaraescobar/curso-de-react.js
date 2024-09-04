import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    return (
        total === 0 ?
        <h1 className='TodoCounter'>
            Agrega una primer tarea...
        </h1> 
        : 
        total === completed ?
        <h1 className='TodoCounter todoCounter--completed'>
            Felicitaciones, Has completado todos los TODOs.
        </h1>
        :
        <h1 className='TodoCounter'>
            Has completado <span>{completed}</span>  de <span>{total}</span> TODOS
        </h1>
    );
}
export { TodoCounter };  