import React from 'react';

import { User } from '../../../common/interfaces/user.interface';
import UsersGridItem from './grid-item';
import { ListComp } from './styles';

interface UsersGridProps { 
    users: User[]
}

const UsersGrid: React.FC<UsersGridProps> = ({ users }: UsersGridProps) => {
    return (
        <ListComp>
            {users.map(user => (
                <div key={`${user._id}}`}>
                    <UsersGridItem user={user} />
                </div>
            ))}
        </ListComp>
    );
}

export default UsersGrid;