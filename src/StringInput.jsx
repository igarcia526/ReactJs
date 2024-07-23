import React, { useState } from 'react';
import Card from './Card';

const StringInput = () => {
  const [inputString, setInputString] = useState('');
  const [showCard, setShowCard] = useState(false);

  function handleButtonClick() {
    setShowCard(true);
    console.log("showCard " + showCard);
  }

  function setBackToFalse() {
    setShowCard(false);
    console.log("showCard " + showCard);
  }

  const handleChange = (event) => {
    setInputString(event.target.value);
  };

  return (

    <div>
      <input
        type="text"
        value={inputString}
        onChange={handleChange}
        placeholder="Hero name"
      />
      {!showCard ? <button onClick={handleButtonClick}>Submit</button> : null}
      {showCard ? <Card  key={showCard} name = {inputString} setBack = {setBackToFalse}/> : null}
    </div>
      
  );
};

export default StringInput;