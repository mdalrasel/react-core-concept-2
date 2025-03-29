import React, { use } from 'react';
import User from './User';

const Users = ({fetchUsers}) => {
    const users = use(fetchUsers);
    console.log(users)
    return (
        <div className='users'>
            <h3>Users :{users.length}</h3>
            {
                users.map(user => <User user={user} key={user.id}></User>)
            }
            
        </div>
    );
};

export default Users;