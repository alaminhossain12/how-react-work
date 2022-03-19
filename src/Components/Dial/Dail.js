import React from 'react';

const Dail = (props) => {
  return (
    <div style={{border: '3px solid black', margin: '10px'}}>
      <h2>This is Dail : {props.name}</h2>
      <p>So Far Dail : {props.watches}</p>
    </div>
  );
};

export default Dail;