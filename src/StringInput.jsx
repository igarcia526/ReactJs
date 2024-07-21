import React, { useState } from 'react';
import Card from './Card';

const StringInput = () => {
  const [inputString, setInputString] = useState('');
  const [showCard, setShowCard] = useState(false);


  const handleChange = (event) => {
    setInputString(event.target.value);
    console.log("setInputString" + typeof setInputString);
  };

  function handleButtonClick() {
    setShowCard(!showCard);
  }

  return (
    <div>
      <input
        type="text"
        value={inputString}
        onChange={handleChange}
        placeholder="Hero name"
      />
      <p>Input: {inputString}</p>
      <button onClick={handleButtonClick}>
        {showCard ? 'Hide' : 'Show'} Card
      </button>
      {showCard && <Card  name= {inputString} />}
    </div>
      
  );
};

export default StringInput;