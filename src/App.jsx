import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StringInput from './StringInput';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>

      <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

    <div>
      <StringInput />
    </div>

    </>
  )
}

export default App
