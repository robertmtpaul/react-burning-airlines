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
            reservations: [],
            flight_number: '',
            destination: '',
            airplane: []
        },
        user_id: 1,
        user_name: '',
        my_reservations: {},
        bgColour: '',
        users: [],
    };

    componentDidMount() {
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
        axios
            .get(
                `https://rails-burning-airlines.herokuapp.com/users.json`
            )
            .then(data => {
                console.log(data);
                this.setState({ users: data.data });
            })
            .catch(err => console.log(err));

    }

  
    seatClick = (reservationIndex, seatNumber) => {
        // this.setState({
        //   bgColour: "red"
        // });
        if (this.state.user_name === '') return;
        //Here we start out by taking a copy of the state, 
        const newState = this.state;
        // do both changes to state: 
        newState.data.reservations[reservationIndex].bgColor = 'red';
        const query = seatNumber
        const seat = new RegExp(`^${query}$`);
        newState.data.reservations.filter(r => 
            r.seat_number.match(seat)
            )[0].user_id = newState.user_id;
        // then at the end of this function we commit that new state 
        this.setState(newState);
    };

    buttonHandler = () => {
        console.log(this.state)
    }

    selectUser = (event) => {
        this.setState({ user_id: event.target.value })
        const selection = this.state.users.filter(user => { return user.id == event.target.value })[0].name
        this.setState({ user_name: selection })
    }


    render() {
        return (


            <div class="wrapper">

                <select onChange={this.selectUser}>
                    <option disabled selected>Please select user</option>
                    {
                        this.state.users.map(user => <option value={user.id}>{user.name}</option>)
                    }
                </select>

                <hr />
                
                <div>
                    <ul class="flight_particulars">
                        <li>Date: {this.state.data.date}</li>
                        <li>Flight number: {this.state.data.flight_number}</li>
                        <li>From: {this.state.data.origin}</li>
                        <li>To: {this.state.data.destination}</li>
                        <li>Type: {this.state.data.airplane.name}</li>
                    </ul>
                </div>



                <div class="container">

                    {this.state.data.reservations.map((reservation, index) => (
                        <div
                            className="seat"
                            key={index}
                            style={{ backgroundColor: reservation.bgColor }}
                            onClick={() => this.seatClick(index, reservation.seat_number)}
                        >
                            {reservation.seat_number}
                            <br/>
                            Reserved by: user:
                            {reservation.user_id === null ? 'vacant' : `X ${this.state.user_name}`}
                        </div>
                    ))}
                </div>


                <button onClick={() => {
                    this.buttonHandler()
                }}
                >Submit
                </button>
            </div>
        );
    }
}

export default FlightDetails;
