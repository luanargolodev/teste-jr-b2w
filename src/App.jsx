import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header';
import Planets from './components/Planets';
import Button from './components/Button';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    function getPlanet() {
      const planet = Math.floor(Math.random() * 60) + 1;
      fetch(`https://swapi.dev/api/planets/${planet}/`)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err));
    }

    getPlanet();
  }, []);

  return (
    <div className="App">
      <Header />
      <Planets data={data} />
      <Button title="Go to the next planet" />
    </div>
  );
};

export default App;
