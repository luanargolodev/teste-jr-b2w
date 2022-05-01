import './App.css';

import Header from './components/Header';
import Planets from './components/Planets';
import Button from './components/Button';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Planets />
      <Button title="Go to the next planet" />
    </div>
  );
};

export default App;
