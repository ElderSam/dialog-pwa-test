import React, { useState } from 'react';
import { ApolloProvider, useQuery } from '@apollo/client';

import client from '../../common/apollo-client';
import Header from '../Header/Header';
import Home from '../../pages/Home';
import './App.css';
import { GET_USERS_BY_NAME } from '../../hooks/users/useGetUsers';

function App() {
  return (
    <ApolloProvider client={client}>
      <AppContainer />
    </ApolloProvider>
  );
}

function AppContainer() {
  const [search, setSearch] = useState<string>("");
  const { data: dataClients, loading: queryLoading } = useQuery(GET_USERS_BY_NAME, {
    variables: {
      name: search,
    }
  })

  return (
    <div className="App">
      <Header setSearch={setSearch} />
      {!queryLoading && <Home users={dataClients?.list || []} />}
    </div>
  )
}

export default App;
