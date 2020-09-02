import React from 'react';
import Categories from './components/Categories'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Address from './components/Address';


function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <h1>Welcome to Chef Chu's Restaurant</h1>
        <nav>
          <ul>
           <li>
              <Link to="/home"><button type="button">Home</button></Link>
            </li>
            <li>
              <Link to="/categories"><button type="button">Categories</button></Link>
            </li>
          </ul>
        </nav>
      </header>
     
    </div>
    <Switch>
          <Route path="/home">
            <Address />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
