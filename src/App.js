import React, {useState} from 'react';
import { CounterButton } from './CounterButton'
import { Greeting } from './Greeting'
import { PeopleList } from './PeopleList'
import { CongratulationsMessage } from './CongratulationsMessage'
import './App.css';

const people = [{
  name: 'john',
  age: 40,
  hairColor: 'brown',
}, {
  name: 'helga',
  age: 25,
  hairColor: 'red',
}, {
  name: 'dwayne',
  age: 55,
  hairColor: 'blonde',
}]

function App() {
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const increment = () => setNumberOfClicks(numberOfClicks +1);

  return (
    <div className="App">
      <header className="App-header">
        <CongratulationsMessage numberOfClicks={numberOfClicks} threshold={10} />
        <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks} />
      </header>
    </div>
  );
}

export default App;
