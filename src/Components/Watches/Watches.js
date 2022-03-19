import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watches = () => {
  const [watches, setWatches] = useState(0)

  const increaseSteps =() =>{
    const newWatches = watches + 1
    setWatches(newWatches)
  }

  useEffect(()=>{
    console.log(watches);
  },[watches])
  return (
    <div>
      <h1>This Is Our Watches</h1>
      <h2>This Current Page : {watches} </h2>
      <button onClick={increaseSteps}>Click Me</button>
      <Display name=" Garmin" steps={watches}></Display>
    </div>
  );
};

export default Watches;