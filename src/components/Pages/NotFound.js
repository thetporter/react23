import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <>
            <p>The page you're requesting does not exist or is currently unavailable.</p>
            <Link to='/'>Return to main page</Link>
        </>
    );
}