import React, { useState } from 'react';
import Card from './Card';
import './StringInput.css'

const StringInput = () => {
  const [inputString, setInputString] = useState('');
  const [showCard, setShowCard] = useState(false);

  function handleButtonClick() {
    setShowCard(true);
  }

  function setBackToFalse() {
    setShowCard(false);
  }

  const handleChange = (event) => {
    setInputString(event.target.value);
  };

  return (

    <div>
      <div className="flex-container">
      <input
        type="text"
        value={inputString}
        onChange={handleChange}
        placeholder="Hero name"
        className="input-hero"
      />
      {!showCard ? <button onClick={handleButtonClick}>Create Hero</button> : null}
      </div>
      {showCard ? <Card  key={showCard} name = {inputString} setBack = {setBackToFalse}/> : null}
    </div>
      
  );
};

export default StringInput;