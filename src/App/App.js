import React from 'react';
import { useTodos } from './useTodos';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodosLoading } from '../TodosLoading/TodosLoading';
import { TodosError } from '../TodosError/TodosError';
import { TodosEmpty } from '../TodosEmpty/TodosEmpty';
import { CreateTodoButton } from '../CreateButton/CreateTodoButton';
import { Modal } from '../Modal/Modal';
import { TodoForm } from '../TodoForm/TodoForm';



function App() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    addTodo,
    searchValue, 
    setSearchValue,
    completedTodos,
    totalTodos,
  } = useTodos()
  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter 
          completedTodos={completedTodos}
          totalTodos={totalTodos}
        />
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        
      </TodoHeader>
      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        totalTodos={totalTodos}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <TodosEmpty />}
        onEmptySearchResults={() => <p> No hay resultados para {searchValue}</p>}
        // Render Function

        render={todo => (
          <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )}>

          {/** Render Props 
        {
          todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )
        }
          */}
      </TodoList>
      <CreateTodoButton setOpenModal={setOpenModal} />
      {openModal &&
        <Modal>
          <TodoForm 
          addTodo={addTodo}
          setOpenModal={setOpenModal}
          />
        </Modal>
      }
    </>
  );
}

export default App;
