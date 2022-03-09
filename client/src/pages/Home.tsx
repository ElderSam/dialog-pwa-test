import React from 'react'
import UsersGrid from '../components/users/users-grid';

function Home({ users }: any) {
//   const users = useGetUsers();

    return (
        <div>
            <p>total: {users.length}</p>
            <UsersGrid users={users || []} />
        </div>
    )
}

export default Home