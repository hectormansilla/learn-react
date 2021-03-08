import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HomePage, CounterButtonPage, PeopleListPage } from './pages';
import './App.css';



function App() {
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  const [hideMessage, setHidemessage] = useState(false);


  return (
    <div className="App">
     <Router>
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
