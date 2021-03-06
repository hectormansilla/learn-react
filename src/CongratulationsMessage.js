import React, { useEffect } from 'react';

export const CongratulationsMessage = ({numberOfClicks, threshold, onHide}) => {
    useEffect(() => {
        return () => console.log('Congrast message unmounting!');
    }, []);

    return numberOfClicks >= threshold
        ?   <>
                <h1>Contragulations! You've reached {threshold} number of clicks!</h1>    
                <button onClick={onHide}>Hide</button>
            </> 
        
        : null
}