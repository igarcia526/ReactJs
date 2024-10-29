import React, { useState } from 'react';
import Card from './Card';
import './StringInput.css'
import axios from 'axios';

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
    callApi(showCard);
  };

  const [user, setUser] = useState(null);
  
  function callApi(cardOpen) {
    if(!cardOpen) {
      axios.get('https://randomuser.me/api')
        .then(response => {
          setUser(response.data.results[0]);
          //setLoading(false);
        })
        .catch(error => {
              (error);
          //etLoading(false);
        });
    }
  }

  return (

    <>
      <div className="flex-container">
      <input
        type="text"
        value={inputString}
        onChange={handleChange}
        placeholder="Enter a name"
        className="input-hero"
      />
      {!showCard ? <button onClick={handleButtonClick} disabled={!inputString}>Search</button> : null}
      </div>
      {showCard ? <Card  key={showCard} name = {inputString} setBack = {setBackToFalse} userData = {user}/> : null}
    </>
      
  );
};

export default StringInput;