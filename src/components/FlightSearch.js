import React from 'react';
import axios from 'axios';
import { Route, Link, HashRouter as Router } from 'react-router-dom';

class FlightSearch extends React.Component {
  
    state = {
        airports: [],
        results: [], 
        origin: '', 
        destination: ''
    }

    componentDidMount() {
        console.log('Loaded');
        axios.get( `https://rails-burning-airlines.herokuapp.com/airports.json` )
        .then( data => {
          console.log(data);
          this.setState({airports: data.data})
        })

        //another get requewst (https://rails-burning-airlines.herokuapp.com/airports.json)
        // set state of airports 
    }

    handleSubmit = (event) => {
        console.log('form submitted')
        event.preventDefault();
        axios.get( `https://rails-burning-airlines.herokuapp.com/flights/search/${this.state.origin}/${this.state.destination}.json` )
        .then( data => {
          console.log(data);
          this.setState({results: data.data})
        })
        .catch(err => console.log(err));
        console.log(`https://rails-burning-airlines.herokuapp.com/flights/search/${this.state.origin}/${this.state.destination}.json`)
    }

    selectOrigin = (event) => {
        console.log(`origin changed to ${event.target.value}` )
        this.setState({origin: event.target.value})
    }

    selectDestination = (event) => {
        console.log(`destination changed to ${event.target.value}` )
        this.setState({destination: event.target.value})
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <select onChange={this.selectOrigin}>
                        <option disabled selected>Please select origin airport</option>
                        {
                            this.state.airports.map(airport => <option value={airport.code}>{airport.name}</option>)
                        }
                    </select>
                    <select onChange={this.selectDestination}>
                        <option disabled selected>Please select destination airport</option>
                        {
                            this.state.airports.map(airport => <option value={airport.code}>{airport.name}</option>)
                        }
                    </select>

                    <input type='submit' value='Search' />
                </form>
                <br />
                <h3>Flight search results</h3>
                <table>
                    <thead>
                        <td>Date</td>
                        <td>Flight number</td>
                        <td>From</td>
                        <td>To</td>
                        <td>Plane</td>
                    </thead>
                    {
                        this.state.results.map(result => (
                            <tr>    
                                <td>{result.date}</td>
                                <td><Link to={`/flight/${result.id}`}>{result.flight_number}</Link></td>
                                <td>{result.origin}</td>
                                <td>{result.destination}</td>
                                <td>{result.airplane.name}</td>
                           </tr>
                        ))
                    }
                </table>
            </div>
        )
    }

}
export default FlightSearch
