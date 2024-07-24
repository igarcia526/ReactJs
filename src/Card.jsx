import React, { useState } from 'react';
import './Card.css'
import pathyImage from './assets/pathy.png'

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
const Card = ({ name, setBack }) => {
  const [nameP, setnameP] = useState(name);
  const [cardShow, setcardShow] = useState(true);

  let nancyObj = {
    name : 'Nancy',
    job : 'School Admin',
    salary : 150000
  }

  function closeCard() {
    setcardShow(false);
    setBack();
  }
  
  return (
        cardShow ? (          
            <div className="card" >
            <div className="card-body">
                <h5 className="card-title">{nameP}</h5>
                <div className="card-image">
                <img src={pathyImage} className="pathy" />
                </div>
                <div className="card-hero-info">
                <p className="card-text">{!nameP ? 'Fill out the name first' : 'Your Hero is ' + nameP}</p>
                {nameP ?
                <>
                <p>Job: {nameP == 'Nancy' ? nancyObj.job : 'Unemployed'}</p>
                <p>Salary: {nameP == 'Nancy' ? nancyObj.salary : 0}</p> 
                </> :
                null
                }
                <button onClick={closeCard}>{!nameP ? 'Try Again' : 'Close Card'}</button>
                </div>
            </div>
            </div>
        ) : null
    
  );
};

export default Card;