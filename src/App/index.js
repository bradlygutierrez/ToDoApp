import useLocalStorage from '../ToDoContex/useLocalStorage.js';
import './App.css'
import { TodoProvider } from '../ToDoContex/index.js';
import AppUI from './AppUI.js';
import React from 'react';

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
