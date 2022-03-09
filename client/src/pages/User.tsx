import { useQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import { User } from '../common/interfaces/user.interface';

import { AppHeader } from '../components/Header/styles'
import UsersGrid from '../components/users/users-grid';
import { GET_USER_BY_ID } from '../hooks/users/useGetUsers';
import { StyledLink, UserCard, UserCardBody, Title2 } from './styles';
import { ReactComponent as GoBackIcon } from '../components/icons/circle-chevron-left-solid.svg'
function UserPage() {
    const location = useLocation();
    const [id, setId] = useState('')
    const [user, setUser] = useState<User | any>({})

    const { data: dataUser, loading: queryLoading } = useQuery(GET_USER_BY_ID, {
        variables: {
            userId: id,
        }
    })

    useEffect(() => {
        const auxId = location.pathname.split('/')[2]
        setId(auxId)
    }, [location, location.pathname])

    useEffect(() => {
        if (!queryLoading && dataUser) {
            setUser(dataUser.getUserById)
        }
    }, [queryLoading, dataUser])

    return (
        <div>
            <AppHeader>
                <StyledLink to='/'>
                    <GoBackIcon />
                </StyledLink>

                <p>MySocial</p>
            </AppHeader>
            <div>
                <UserCard>
                    <img src={user.picture} alt="user" />
                    <UserCardBody>
                        <div><strong>name:</strong> {user.name}</div>
                        <div><strong>age:</strong> {user.age}</div>
                        <div><strong>email:</strong> {user.email}</div>
                    </UserCardBody>
                </UserCard>
                <Title2>Friends ({user?.friends?.length | 0}):</Title2>
                <UsersGrid users={user?.friends || []} />
            </div>
        </div>
    )
}

export default UserPage