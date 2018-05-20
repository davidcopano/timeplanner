import React, { Component } from 'react';
import "./DayDetails.css";

export class DayDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            day: this.props.day
        }
    }

    closeDayDetails = () => {
        this.setState({
            day: undefined
        })
    }

    componentWillReceiveProps(nexProps) {
        this.setState({
            day: nexProps.day
        })
    }

    render() {
        // si tenemos dia mostramos los detalles
        // si no animamos el elemento para que se cierre
        if (this.state.day) {
            return (
                <div id="day-details" className={['day-details', this.state.day !== undefined ? 'isOpened' : 'isClosed'].join(' ')} >
                    <button className="closebtn" onClick={this.closeDayDetails}>&times;</button>
                    <button>About</button>
                    <button>Services</button>
                    <button>Clients</button>
                    <button>Contact</button>
                </div>
            )
        }
        else {
            return (
                <div id="day-details" className={['day-details', 'isClosed'].join(' ')} >
                    <button className="closebtn" onClick={this.closeDayDetails}>&times;</button>
                    <button>About</button>
                    <button>Services</button>
                    <button>Clients</button>
                    <button>Contact</button>
                </div>
            )
        }
    }
}