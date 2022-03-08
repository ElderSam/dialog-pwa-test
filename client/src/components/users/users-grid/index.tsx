import React from 'react';

import { User } from '../../../common/interfaces/user.interface';
// import UsersGridItem from './grid-item';

interface UsersGridProps { 
    users: User[]
}

const UsersGrid: React.FC<UsersGridProps> = ({ users }: UsersGridProps) => {
    console.warn('users')
    console.log(users)
    return (
        <div className="users-grid">
            {users.map(user => (
                <div key={`${user._id}}`}>
                    {/* <UsersGridItem user={user} /> */}
                </div>
            ))}
        </div>
    );
}

export default UsersGrid;