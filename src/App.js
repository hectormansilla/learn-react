import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { HomePage, CounterButtonPage, PeopleListPage } from './pages';
import './App.css';



function App() {
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  const [hideMessage, setHidemessage] = useState(false);


  return (
    <div className="App">
     <Router>
       <Link to='/'>Go to Home Page</Link>
       <Link to='/counter'>Go to Counter Page</Link>
       <Link to='/people-list'>Go to People List Page Page</Link>
       <Route path='/' exact>
        <HomePage />
       </Route>
       <Route path='/counter'>
         <CounterButtonPage />
       </Route>
       <Route path='/people-list'>
         <PeopleListPage />
       </Route>
     </Router>
    </div>
  );
}

export default App;
