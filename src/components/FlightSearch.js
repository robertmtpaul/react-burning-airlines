import React from 'react';
import axios from 'axios';

class FlightSearch extends React.Component {

    state  = {
        countries: [{ name: 'Australia', code: 'AU'}, { name: 'United Kingdom', code: 'UK'}, { name: 'New Zealand', code: 'NZ' }]
    }

    render(){
        return(
            <div>
                <form>
                    <select>
                        <option disabled selected>Please select country</option>
                        {
                            this.state.countries.map(country=> <option value={country.code}>{country.name}</option>)
                        }
                    </select>
                </form>
            </div>
        )
    }

}
export default FlightSearch