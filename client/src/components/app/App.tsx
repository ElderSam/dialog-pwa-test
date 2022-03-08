import React from 'react';
import { ApolloProvider } from '@apollo/client';

import client from '../../common/apollo-client';
import Header from '../Header/Header';
import Home from '../../pages/Home';
import './App.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <Home />
      </div>
    </ApolloProvider>
  );
}

export default App;
