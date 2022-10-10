import React from 'react';
import './App.css';
import { Header } from '../Header/Header';
import { Todo } from '../Todo/Todo';
import { useSelector } from 'react-redux';
import { selectAppColorChange } from './appColorChangeSlice';


function App() {
  const backgroundState = useSelector(selectAppColorChange);
  const body = document.getElementsByTagName('body')[0];
  if(backgroundState){
    body.style.backgroundColor = '#fff';
  }else{
    body.style.backgroundColor = 'hsl(235, 21%, 11%)';
  }
  
  return (
    <div className="App">
      <Header />
      <Todo />
    </div>
  );
}

export default App;
