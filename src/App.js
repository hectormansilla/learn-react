import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { HomePage, 
  CounterButtonPage, 
  PeopleListPage, 
  NotFoundPage, 
  ProtectedPage, 
  ControlledFormPage,
  UncontrolledFormPage,
 } from './pages';
import './App.css';



function App() {

  return (
    <div className="App">
      <Router>
        <Link to='/'>Go to Home Page</Link>
        <Link to='/counter'>Go to Counter Page</Link>
        <Link to='/people-list'>Go to People List Page</Link>
        <Link to='/protected'>Go to Protected Page</Link>
        <Link to='/uncontrolled'>Go to Protected Page</Link>
        <Link to='/controlled'>Go to Protected Page</Link>
        <Link to='/people-list2'>Go to 404 Page</Link>
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/counter'>
            <CounterButtonPage />
          </Route>
          <Route path='/people-list'>
            <PeopleListPage />
          </Route>
          <Route path='/protected'>
            <ProtectedPage />
          </Route>
          <Route path='/controlled'>
            <ControlledFormPage />
          </Route>
          <Route path='/uncontrolled'>
            <UncontrolledFormPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
