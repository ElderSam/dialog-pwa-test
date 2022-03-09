import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { User } from '../../../../common/interfaces/user.interface';

import { GridUserItem, CardHeader, CardBody } from './styles';

const UsersGridItem: React.FC<{ user: User }> = ({ user }: { user: User }) => {
    const navigate = useNavigate()
    const location = useLocation();
    const page = location.pathname.split('/')[1]

    const goToUser = () => {
        if (!(page === 'user'))
            navigate(`/user/${user._id}`)
    }

    return (
        <GridUserItem onClick={goToUser} page={page}>
            <CardHeader>
                <img src={user.picture} alt="user" />
            </CardHeader>
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