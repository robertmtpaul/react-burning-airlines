import React from 'react';
import './App.css';
import axios from 'axios'
import { Route, Link, HashRouter as Router } from 'react-router-dom';

import FlightSearch from './components/FlightSearch'
import FlightDetails from './components/FlightDetails'
import Airplanes from './components/Airplanes'

import './App.css'

class App extends React.Component {
  
  render(){
    return(
      <div>
        <h1>Burning Airlines</h1>

        <Router>
          <nav>
            <Link to='/FlightSearch'>FlightSearch</Link> | &nbsp;
            <Link to='/Airplanes'>Airplanes</Link> | &nbsp;
            <Link to='/Admin'>Admin</Link> | &nbsp;
              <hr/>
          </nav>

          <Route exact path='/FlightSearch' component={FlightSearch}/>
          <Route exact path='/flight/params:id' component={FlightDetails}/>
        </Router>
      </div>

    ); //return
  }//render
}//class App

export default App;
