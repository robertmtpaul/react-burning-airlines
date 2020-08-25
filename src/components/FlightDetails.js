import React from 'react';
import axios from 'axios';

class FlightDetails extends React.Component {

    render(){
        return(
            <div>
            <table>
                <tr>Date</tr>
                <tr>Flight number</tr>
                <tr>From '{">"}' To </tr>
            </table>
        </div>
        )
    }

}
export default FlightDetails