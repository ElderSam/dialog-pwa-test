import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ApolloProvider } from '@apollo/client';

import client from '../../common/apollo-client';
import Home from '../../pages/Home';
import './App.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <AppContainer />
    </ApolloProvider>
  );
}

const AppContainer: React.FC = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/user" element={<div>user</div>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
