import logo from './logo.svg';
import { CounterButton } from './CounterButton'
import { Greeting } from './Greeting'
import { PeopleList } from './PeopleList'
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
  let adjective = 'cool!';
  let url = 'https://reactjs.org';

  return (
    <div className="App">
      <header className="App-header">
        <CounterButton />
      </header>
    </div>
  );
}

export default App;
