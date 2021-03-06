import React from 'react';

export const CongratulationsMessage = ({numberOfClicks, threshold}) => {
    return numberOfClicks >= threshold
        ? <h1>Contragulations! You've reached {threshold} number of clicks!</h1>
        : null
}