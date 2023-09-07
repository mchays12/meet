import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import './App.css';
import NumberOfEvents from './components/NumberOfEvents';
import { useState, useEffect } from 'react';

const App = () => {
  const [currentNOE, setCurrentNOE] = useState(32);
  const [errorAlert, setErrorAlert] = useState('');
  return (
    <div className="App">
      <CitySearch />
      <EventList />
      <NumberOfEvents
        setCurrentNOE={setCurrentNOE}
        setErrorAlert={setErrorAlert}
      ></NumberOfEvents>
    </div>
  );
}

export default App;
