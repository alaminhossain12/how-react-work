import React from 'react';
import Dail from '../Dial/Dail';

const Display = (props) => {
  return (
    <div style={{border: "5px solid black", backgroundColor: "green", padding: '20px', borderRadius: '20px', margin: '10px', color: 'white', fontSize: '20px'}}>
      <h1>Name :{props.name} </h1>
      <p>So Far Display : {props.steps}</p>
      <Dail steps={props.watches}></Dail>
    </div>
  );
};

export default Display;