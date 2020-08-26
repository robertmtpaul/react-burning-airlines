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
        user_name: '',
        my_reservations: {},
        bgColour: "",
        users: []
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
        const newState = this.state;
        newState.data.reservations[reservationIndex].bgColor = 'red';
        newState.my_reservations.seat_id =
            this.setState(newState);

        const query = seatNumber
        const seat = new RegExp(`^${query}$`);
        this.setState(state => {
            state.data.reservations.filter(r => r.seat_number.match(seat))[0].user_id = this.state.user_id
            return state
        })

    };

    fuckingButtonSubmitThisShit = () => {
        console.log( this.state )
    }

    selectUser = (event) => {
        this.setState({ user_id: event.target.value })
        const selection = this.state.users.filter(user => { return user.id == event.target.value })[0].name
        this.setState({ user_name: selection })
    }


    render() {
        return (


            <div class="wrapper">
                <button onClick={this.testFunction}>Test</button>

                <select onChange={this.selectUser}>
                    <option disabled selected>Please select user</option>
                    {
                        this.state.users.map(user => <option value={user.id}>{user.name}</option>)
                    }
                </select>

                <hr />



                <div class="container">
                    {this.state.data.reservations.map((reservation, index) => (
                        <div
                            className="seat"
                            key={index}
                            style={{ backgroundColor: reservation.bgColor }}
                            onClick={() => this.seatClick(index, reservation.seat_number)}
                        >
                            {reservation.seat_number}
                            Reserved by: user:
                            {reservation.user_id === null ? 'vacant' : `X ${this.state.user_name}`}
                        </div>
                    ))}
                </div>

                <button onClick={() => {
                    this.fuckingButtonSubmitThisShit()
                }}
                >Submit
                </button>
            </div>
        );
    }
}

export default FlightDetails;
