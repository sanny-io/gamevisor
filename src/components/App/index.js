import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from '../NavBar';
import Landing from '../Landing';

export default function App() {
  return (
    <main>
      <NavBar />
      <Route exact path="/" component={Landing} />
    </main>
  );
};
