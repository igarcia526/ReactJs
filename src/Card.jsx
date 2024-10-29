import React, { useState } from 'react';
import './Card.css'
import pathyImage from './assets/pathy.png'
import FileSelector from './FileSelector';



/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
const Card = ({ name, setBack, userData }) => {
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
                <h5 className="card-title">{ nameP+ ' ' + userData.name.last}</h5>
                <div className="card-image">
                <img src={userData.picture.large} className="pathy" alt='image of pathfinder from Apex Legends'/>
                </div>
                <div className="card-hero-info">
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
            <FileSelector />
            </div>
        ) : null
    
  );
};

export default Card;