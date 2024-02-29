import React from 'react';

function Card({ username, password }) {
  return (
    <div>
      <h2>User Information</h2>o
      
      <p>Username: {username}</p>
      <p>Password: {password}</p>
    </div>
  );
}

export default Card;