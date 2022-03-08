import React from 'react'
import UsersGrid from '../components/users/users-grid';

import { useGetUsers } from '../hooks/users/useGetUsers';

function Home() {
    const users = useGetUsers();

    return (
        <div>
            <div>Home</div>
            <UsersGrid users={users || []} />
        </div>
    )
}

export default Home