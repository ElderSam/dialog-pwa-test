import React from 'react'
import UsersGrid from '../components/users/users-grid';

function Home({ users }: any) {
//   const users = useGetUsers();

    return (
        <div>
            <UsersGrid users={users || []} />
        </div>
    )
}

export default Home