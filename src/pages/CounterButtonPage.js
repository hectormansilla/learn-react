import React, { useState } from 'react';
import {  CounterButton } from '../CounterButton';
import {  CongratulationsMessage } from '../CongratulationsMessage';

export const CounterButtonPage = () => {
    const [numberOfClicks, setNumberOfClicks] = useState(0);
    const increment = () => setNumberOfClicks(numberOfClicks + 1);
  
    const [hideMessage, setHidemessage] = useState(false);
    
    return (
      <>
          <h1>The Counter Button Page</h1>
          {hideMessage
            ? null
            : <CongratulationsMessage
                numberOfClicks={numberOfClicks} 
                threshold={10} 
                onHide={() => setHidemessage(true)} />
          }
          <CounterButton 
            onIncrement={increment} 
            numberOfClicks={numberOfClicks} />
      </>
    );
}