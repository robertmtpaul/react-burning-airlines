import React from "react";
import axios from "axios";
import { Route, Link, HashRouter as Router } from "react-router-dom";

class FlightDetails extends React.Component {

    saveReservation = (seat) => {
        this.setState({
            my_reservations: seat
        })
    }

    state = {
        data: {
            reservations: []
        },
        user_id: 1,
        my_reservations: {},
        bgColour: ""
    };

    componentDidMount() {
        console.log(this.props);
        axios
            .get(
                `https://rails-burning-airlines.herokuapp.com/flights/${
                this.props.match.params.id
                }.json`
            )
            .then(data => {
                console.log(data);
                this.setState({ data: data.data });
            })
            .catch(err => console.log(err));
    }

    seatClick = (reservationIndex) => {
        // this.setState({
        //   bgColour: "red"
        // });
        const newState = this.state;
        newState.data.reservations[reservationIndex].bgColor = 'red';
        newState.my_reservations.seat_id =
            this.setState(newState);

    };

    testFunction = ( event ) => {
        const query = '1A'
        const seat = new RegExp(`^${query}$`);
        console.log(this.state.data.reservations.filter(r => r.seat_number.match(seat)))
        const selection = this.state.data.reservations.filter(r => r.seat_number.match(seat))[0]
        this.setState( {selection:{selection, user_id: 1}})
        console.log( selection)
    }

    


    render() {
        return (


            <div class="wrapper">
                <button onClick={ this.testFunction }>Test</button>
                <br />


                <div class="container">
                    {this.state.data.reservations.map((reservation, index) => (
                        <div
                            className="seat"
                            key={index}
                            style={{ backgroundColor: reservation.bgColor }}
                            onClick={() => this.seatClick(index)}
                        >
                            {reservation.seat_number}
                            {reservation.user_id}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    // array of objects
    // map through grid of each seat
    // make grid of divs
}

export default FlightDetails;
