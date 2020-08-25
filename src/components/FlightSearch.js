import React from 'react';
import axios from 'axios';

class FlightSearch extends React.Component {

    state  = {
        countries: [{ name: 'Australia', code: 'AU'}, { name: 'United Kingdom', code: 'UK'}, { name: 'New Zealand', code: 'NZ' }],
        cities: [{ name: 'Sydney', code: 'SYD'}, { name: 'Melbourne', code: 'MEL'}]

    }

    componentDidMount(){

    }

    render(){
        return(
            <div>
                <form>
                    <select>
                        <option disabled selected>From</option>
                        {
                            this.state.countries.map(country=> <option value={country.code}>{country.name}</option>)
                        }
                    </select>
                    <select>
                        <option disabled selected>To</option>
                        {
                            this.state.countries.map(country=> <option value={country.code}>{country.name}</option>)
                        }
                    </select>
                    <select>
                        <option disabled selected>From</option>
                        {
                            this.state.cities.map(city=> <option value={city.code}>{city.name}</option>)
                        }
                    </select>
                    <select>
                        <option disabled selected>To</option>
                        {
                            this.state.cities.map(city=> <option value={city.code}>{city.name}</option>)
                        }
                    </select>
                </form>
                <br/>
                <table>
                    <tr>Date</tr>
                    <tr>Flight number</tr>
                    <tr>From '{">"}' To </tr>
                </table>
            </div>
        )
    }

}
export default FlightSearch