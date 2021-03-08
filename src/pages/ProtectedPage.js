import React from 'react';
import { Redirect } from 'react-router-dom';

export const ProtectedPage = () => {
    const isAuthed = true;
    return isAuthed
    ? (
        <h1>Only authorized users should be able to see this!</h1>
      )
    : (
        <Redirect to='/' />
      )
};