import React from 'react';
import axios from 'axios';

class FlightSearch extends React.Component {



    
    state = {
        airports: [{ name: 'Sydney', code: 'SYD' }, { name: 'Melbourne', code: 'MEL' }, { name: 'Auckland', code: 'AKL' }],
        results: [
            { 
                date: "test date", 
                flight_number: "test flight", 
                origin: "test origin",
                destination: "test dest",
                plane: "test name"
                
            }, 
            { 
                date: "test date2", 
                flight_number: "test flight 2", 
                origin: "test origin 2",
                destination: "test dest 2",
                plane: "test name"
            } 
        ]  
    }

    componentDidMount() {
        axios.get('https://rails-burning-airlines.herokuapp.com/flights/search/SYD/SYD.json')
        .then( data => {
            this.setState({results: data.results})
        })
        .catch(err => console.log(err));
    }


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
                    <tr>
                        <td>Date</td>
                        <td>Flight number</td>
                        <td>From</td>
                        <td>To</td>
                        <td>Plane</td>
                    </tr>
                    {
                        this.state.results.map(result => (
                            <tr>
                                <td>{result.date}</td>
                                <td>{result.flight_number}</td>
                                <td>{result.origin}</td>
                                <td>{result.destination}</td>
                                <td>{result.plane}</td>
                           </tr>
                        ))
                    }
                </table>
            </div>
        )
    }

}
export default FlightSearch