import React, { useState } from 'react';

export const ControlledFormPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [favoriteColor, setFavoriteColor] = useState('');

    return (
        <form>
            <h3>Please enter your information:</h3>
            <div>
                <input 
                  type='text' 
                  placeholder='Name' 
                  onChange={ev => setName(ev.target.value)} />
            </div>
            <div>
                <input 
                  type='text' 
                  placeholder='Email' 
                  onChange={ev => setEmail(ev.target.value)} />
            </div>
            <div>
                <input 
                  type='text' 
                  placeholder='Favorite Color' 
                  onChange={ev => setFavoriteColor(ev.target.value)} />
            </div>
            <button onClick={ev => {
                alert(`
                    Your name is ${name},
                    Your e-mail is ${email},
                    Your favorite color is ${favoriteColor}!
                `)
                }
            }
            >Submit</button>
        </form>


    )
};