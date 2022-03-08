import React from 'react';
import { User } from '../../../../common/interfaces/user.interface';

import { GridUserItem, CardBody } from './styles';

const UsersGridItem: React.FC<{ user: User }> = ({ user }: { user: User }) => {
    return (
        <GridUserItem>
            <img src={user.picture} alt="user" />
            <CardBody>
                <p>name: {user.name}</p>
                <p>age: {user.age}</p>
                <p>eyeColor: {user.eyeColor}</p>
                <p>company: {user.company}</p>
                <p>email: <a href={`mailto:${user.email}`}>{user.email}</a></p>
            </CardBody>
        </GridUserItem>
    );
}

export default UsersGridItem;