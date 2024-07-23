import React, { useState } from 'react';
import StringInput from './StringInput';


/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
const Card = ({ name, setBack }) => {
  //const [inputString, setInputString] = useState('');
  const [nameP, setnameP] = useState(name);
  const [cardShow, setcardShow] = useState(true);

  console.log("cardShow " + cardShow);
  //setcardShow(true);

  function closeCard() {
    setcardShow(false);
    setBack();
  }
  
  return (
        cardShow ? (
            
            <div className="card" style={cardStyle}>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>

                <p className="card-text">{!nameP ? 'Fill out the name first' : 'Your Hero is ' + nameP}</p>
                <button onClick={closeCard}>{!nameP ? 'Try Again' : 'Close Card'}</button>
            </div>
            </div>
        ) : null
    
  );
};

const cardStyle = {
    border: '1px solid #ccc',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '2px 2px 12px rgba(0, 0, 0, 0.1)',
    width: '300px',
    margin: '16px auto',
  };

export default Card;