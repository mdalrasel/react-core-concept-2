import React from 'react';

const User = ({user}) => {

    const {name,email} =user
    return (
        <div >
            <h2>Name:{name} </h2>
            <h2>Email:{email} </h2>
        </div>
    );
};

export default User;