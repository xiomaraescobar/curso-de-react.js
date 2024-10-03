import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }));
  const {
    error,
    sincronizedItem,
    loading,
    item,
  } = state;

  //action creater
  const onSuccess = (item) => dispatch({ type: actionTypes.success, payload: item })
  const onError = (error) => dispatch({ type: actionTypes.error, payload: error })
  const onSave = (item) => dispatch({ type: actionTypes.save, payload: item })
  const onSincronize = () => dispatch({ type: actionTypes.sincronize })

  // useEfect se ejecutra cuando carga la app.
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        onSuccess(parsedItem)
      } catch (error) {
        onError(error)
      }
    }, 2000);
  }, [sincronizedItem]);

  // funcion guardar item
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem);
    } catch (error) {
      onError(error)
    }
  };
  // sincroniza multiples paginas en el navegador con localstorage
  const sincronizeItem = () => {
    onSincronize()
  }
  return { item, saveItem, loading, error, sincronizeItem };
}
// variables de estado para use Reducer 
const initialState = ({ initialValue }) => ({
  sincronizedItem: true,
  error: false,
  loading: true,
  item: initialValue,
});

// action types.
const actionTypes = {
  error: 'ERROR',
  save: 'SAVE',
  success: 'SUCCESS',
  sincronize: 'SINCRONIZE',
};

// Object de reducers
const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
    loading: false,
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    item: payload,
    sincronizedItem: true,
  },
  [actionTypes.save]: {
    ...state,
    item: payload
  },
  [actionTypes.sincronize]: {
    ...state,
    sincronizedItem: false,
    loading: true,
  }
});

// function reducer que utiliza los objects Reducer anteriores
const reducer = (state, action) => {
  return (reducerObject(state, action.payload)[action.type] || state)
};

export { useLocalStorage }