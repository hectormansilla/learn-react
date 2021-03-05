import React from 'react';

export const Greeting = ({ name, numberOfMessages }) => {
    let isMorning =  (new Date()).getHours() < 12;
    let greetingHeader = isMorning
      ? <h3>Good Morning {name}!</h3>
      : <h3>Good Evening {name}!</h3>
    
    return (
        <>
        {greetingHeader}
        <p>You hace {numberOfMessages} new messages</p>
        </>
    )
}