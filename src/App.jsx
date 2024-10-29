import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StringInput from './StringInput';
import RandomUser from './RandomUser';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  
  return (
    <>
    <div className='main'>
      <h1>FBI Database Search</h1>
      <StringInput />
    </div>
    </>
  )
}

export default App
