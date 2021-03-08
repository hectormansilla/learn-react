import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const UserProfilePage = () => {
    const [user,setUser] = useState({ name: {}});
    const [avatar, setAvatar] = useState();
    useEffect(() =>{
        const fetchUser = async () => {
            const response = await axios.get('https://randomuser.me/api');
            setUser(response.data.results[0]);
            console.log(response.data.results[0].picture.medium);
            setAvatar(response.data.results[0].picture.medium);
        }

        fetchUser();
        
    }, []);

    return (
        <div>
            <img src={avatar} alt='User' />
            <h3>Name: {user.name.first} {user.name.last}</h3>
            <p>Email: {user.email}</p>
        </div>
    );
}