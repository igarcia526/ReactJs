import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StringInput from './StringInput';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  
  return (
    <>

      <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
      </div>

    <div className='main'>
      <StringInput />
    </div>

    </>
  )
}

export default App
