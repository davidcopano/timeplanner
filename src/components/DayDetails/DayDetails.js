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
        if(this.state.day) {
            console.log('hay dia');
            console.log(this.state.day);

            return (
                <div id="day-details" className="day-details" style={{ width: '250px' }}>
                    <button className="closebtn" onClick={this.closeDayDetails}>&times;</button>
                    <button>About</button>
                    <button>Services</button>
                    <button>Clients</button>
                    <button>Contact</button>
                </div>
            )
        }
        else {
            return null;
        }
    }
}