import React from 'react';
import { TodoCounter } from './TodoCounter/TodoCounter';
import { TodoSearch } from './TodoSearch/TodoSearch';
import { TodoList } from './TodoList/TodoList';
import { TodoItem } from './TodoItem/TodoItem';
import { TodosLoading } from './TodosLoading/TodosLoading';
import { TodosError } from './TodosError/TodosError';
import { TodosEmpty } from './TodosEmpty/TodosEmpty';
import { CreateTodoButton } from './CreateButton/CreateTodoButton';
import { Modal } from './Modal/Modal';
import { TodoForm } from './TodoForm/TodoForm';
import { TodoContext } from './TodoContext/TodoContext';

function AppUi() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);
    return (
        <>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {loading && (
                    <>
                        <p>Buscando tareas</p>
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                    </>
                )}
                {error && <TodosError />}
                {(!loading && searchedTodos.length === 0) && <TodosEmpty />}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            <CreateTodoButton setOpenModal={setOpenModal} />
            {openModal &&
                <Modal>    
                    <TodoForm />
                </Modal>
            }
        </>
    );
}

export { AppUi }