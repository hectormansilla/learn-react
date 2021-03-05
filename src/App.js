import logo from './logo.svg';
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
        <Greeting name="Héctor" numberOfMessages={10} />
        <PeopleList people={people} />
        <button onClick={() => alert('Hello!')}>Click Me!</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is {adjective}
        </p>
        <a
          className="App-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
