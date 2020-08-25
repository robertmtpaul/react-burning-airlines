import React from 'react';
import './App.css';
import { Route, Link, Router } from 'react-router-dom';

import FlightSearch from './components/FlightSearch'

// Load title and navbar
class App extends React.Component {
  
  render(){
    return(
      <div>
        <h1>Air Quality</h1>

        <Router>
          <nav>
            <Link to='/'>Home</Link> | &nbsp;
            <Link to='/FlightSearch'>My Air Quality</Link> | &nbsp;
              <hr/>
          </nav>

          <Route exact path='/' component={FlightSearch}/>
          {/* <Route exact path='/search/country/:query' component={SearchCountry}/> */}
        </Router>
      </div>
      
    ); //render
  }//render
}//class App

export default App;
