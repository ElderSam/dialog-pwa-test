import React from 'react';
import { User } from '../../../../common/interfaces/user.interface';

const UsersGridItem: React.FC<{ user: User }> = ({ user }: { user: User }) => {
    return (
        <div>
            <p>{user._id}</p>
            <p>{user.name}</p>
            <p>{user.age}</p>
            <p>{user.eyeColor}</p>
            <p>{user.company}</p>
            <p>{user.email}</p>
        </div>
    );
}

export default UsersGridItem;