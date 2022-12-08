import React, { useState, useReducer, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const todoList = [{ name: 'pencil' }];

const App = () => {
  const [appName] = useState('pingPong');
  const [todo, setTodoList] = useState(todoList);

  const handleClick = () => {
    dispatch({ type: 'ADD', data: { name: Math.floor(Math.random(2) * 10) } });
  };

  const handleClear = () => {
    dispatch({ type: 'CLEAR' });
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        const { data } = action;
        const addedResult = [...todo, { ...data }];
        setTodoList(addedResult);
        return addedResult;
      case 'CLEAR':
        setTodoList([]);
        return [];
      default:
        return state;
    }
  };

  const [initial, dispatch] = useReducer(reducer, todo);

  return (
    <div id="main">
      <h3>Hello, {appName}</h3>
      <button onClick={handleClick}>Add</button>{' '}
      <button onClick={handleClear}>Clear</button>
      <p></p>
      {todo.map((ini, key) => (
        <p key={Math.floor(Math.random(1000) * 99)}>{ini.name}</p>
      ))}
    </div>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
