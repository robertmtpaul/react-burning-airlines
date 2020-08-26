import React from 'react';
import axios from 'axios';

class FlightSearch extends React.Component {

    state = {
        airports: [{ name: 'Sydney', code: 'SYD' }, { name: 'Melbourne', code: 'MEL' }, { name: 'Auckland', code: 'AKL' }],
        results: []
    }

    componentDidMount() {
        axios.get('https://rails-burning-airlines.herokuapp.com/flights/search/SYD/SYD.json')
        .then( data => {
          console.log(data);
          this.setState({results: data.data})
        })
        .catch(err => console.log(err));
    }

    request

    render() {
        return (
            <div>
                <form>
                    <select>
                        <option disabled selected>Please select origin airport</option>
                        {
                            this.state.airports.map(airport => <option value={airport.code}>{airport.name}</option>)
                        }
                    </select>
                    <select>
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
                                <td>{result.flight_number}</td>
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
