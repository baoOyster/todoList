import React from 'react';
import './App.css';
import { Header } from '../Header/Header';
import { Todo } from '../Todo/Todo';

function App() {
  return (
    <div className="App">
      <Header />
      <Todo />
    </div>
  );
}

export default App;
