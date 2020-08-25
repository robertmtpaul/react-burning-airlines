import React from 'react';
import './App.css';
import axios from 'axios'
import { Route, Link, HashRouter as Router } from 'react-router-dom';

import FlightSearch from './components/FlightSearch'

// Load title and navbar
class App extends React.Component {
  
  render(){
    return(
      <div>
        <h1>Flight search</h1>

        <Router>
          <nav>
            <Link to='/'>Home</Link> | &nbsp;
            <Link to='/FlightSearch'>FlightSearch</Link> | &nbsp;
            <Link to='/Airplanes'>Airplanes</Link> | &nbsp;
            <Link to='/Admin'>Admin</Link> | &nbsp;
              <hr/>
          </nav>

          <Route exact path='/' component={FlightSearch}/>
        </Router>
      </div>

    ); //render
  }//render
}//class App

export default App;
