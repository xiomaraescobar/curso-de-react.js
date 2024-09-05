import React from 'react';
import { AppUi } from './AppUI';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const {
      item: todos,
      saveItem: saveTodos,
      loading,
      error
    } = useLocalStorage('Todo_v1', []);
  const [searchValue, setSearchValue] = React.useState('');
  // counter
  // aca se le asigna a completedTodos, la cantidad ya completados.
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  // search
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const todoTextSearch = searchValue.toLowerCase();
      return todoText.includes(todoTextSearch);
    });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
    <AppUi
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo} />
  );
}

export default App;
