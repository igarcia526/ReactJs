import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './RandomUser.css';



const RandomUser = () => {
  const [user, setUser] = useState(null);

  function callApi() {
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

  //if (loading) return <p>Loading...</p>;
  //if (error) return <p>Error: {error.message}</p>;

  return (
    <>
    <button onClick={callApi}>Call API</button>
    <div>
      {user ? (
        <div className="card">
          <h1>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h1>
          <img src={user.picture.large} alt="User" />
          <p>Email: {user.email}</p>
          <p>Location: {`${user.location.city}, ${user.location.country}`}</p>
        </div>
      ) : null}
    </div>
    </>
  );
};

export default RandomUser;
