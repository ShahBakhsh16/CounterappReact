import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [counter,setCounter] = useState(0);

  const inc = ()=>{
    setCounter (counter + 1)
  }
  const dec = ()=>{
    setCounter (counter - 1)
  }

  const valueNill = ()=> 
  {
    setCounter (0)
  }
  return (
    <div className="App">

      <h1 style={{textAlign:"center"}}>Counter App</h1>

      <h1 style={{textAlign:"center"}}>{counter}</h1>

      <button onClick={inc}>Increment</button>

      <button onClick={dec}>Decrement</button>

      <button onClick={valueNill}>Delete All</button>
    </div>
  );
}

export default App;
