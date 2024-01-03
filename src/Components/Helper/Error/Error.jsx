import React from 'react';

const Error = ({error}) => {

    if (!error) return null;
    return (
        <p style={{ color: '#ff3311', margin: '1rem 0'}}>{error}</p>
    );
};

export default Error;