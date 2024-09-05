import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext/TodoContext';

function CreateTodoButton() {
    const {openModal, setOpenModal} = React.useContext(TodoContext);
    return (
        <button className="CreateTodoButton" onClick={(event) => {
            !openModal ? setOpenModal(true) : setOpenModal(false);
            console.log(event.target);
        }}>+</button>
    );
}
export { CreateTodoButton };