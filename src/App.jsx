import React from 'react';
import './App.css';

import Header from './components/Header';
import Planets from './components/Planets';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Planets />
    </div>
  );
};

export default App;
