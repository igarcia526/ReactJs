import React, { useState } from 'react';

const Card = ({ name, size }) => {
  //const [inputString, setInputString] = useState('');

  console.log("card is called" + typeof name);

  return (
  <div className="card" style={cardStyle}>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Your Hero is {name}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
 </div>
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