import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client';

import UsersGrid from '../components/users/users-grid';
import { GET_USERS_BY_NAME } from '../hooks/users/useGetUsers';
import Header from '../components/Header/Header';

function Home() {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState<string>("");
    const { data: dataClients, loading: queryLoading } = useQuery(GET_USERS_BY_NAME, {
        variables: {
            name: search,
        }
    })

    useEffect(() => {
        if(!queryLoading && dataClients) {
            setUsers(dataClients.list)
        }
    }, [queryLoading, dataClients])

    return (
        <>
            <Header setSearch={setSearch} />

            {queryLoading ? <div>carregando ...</div> : (
                <div>
                    <p>total: {users.length}</p>
                    <UsersGrid users={users || []} />
                </div>
            )}
        </>
    )
}

export default Home