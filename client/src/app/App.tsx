import React from 'react';
import { ApolloProvider } from '@apollo/client';

import client from '../common/apollo-client';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
      </div>
    </ApolloProvider>
  );
}

export default App;
