import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StringInput from './StringInput';
import RandomUser from './RandomUser';
import FileSelector from './FileSelector';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  
  return (
    <>
    <div className='main'>
      
      <StringInput />
    </div>
    </>
  )
}

export default App
