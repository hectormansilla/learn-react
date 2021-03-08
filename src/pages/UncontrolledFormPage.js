import React, from 'react';

export const ControlledFormPage = () => {
    const nameInput = React.createRef();
    const emailInput = React.createRef();
    const favoriteColorInput = React.createRef();

    return (
        <form>
            <h3>Please enter your information:</h3>
            <div>
                <input 
                  ref={nameInput}
                  type='text' 
                  placeholder='Name' />
            </div>
            <div>
                <input 
                  ref={emailInput}
                  type='text' 
                  placeholder='Email' />
            </div>
            <div>
                <input 
                ref={favoriteColorInput}
                  type='text' 
                  placeholder='Favorite Color' />
            </div>
            <button onClick={ev => {
                alert(`
                    Your name is ${nameInput.current.value},
                    Your e-mail is ${emailInput.current.value},
                    and your favorite color is ${favoriteColorInput.current.value}!
                `);
                ev.preventDefault();
                }
            }
            >Submit</button>
        </form>


    )
};