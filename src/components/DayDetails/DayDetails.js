import React, { Component } from 'react';
import "./DayDetails.css";

export class DayDetails extends Component {

    closeDayDetails = () => {
        document.getElementById("day-details").style.width = "0";
    }

    render() {
        return (
            <div id="day-details" className="day-details">
                <button className="closebtn" onClick={this.closeDayDetails}>&times;</button>
                <button>About</button>
                <button>Services</button>
                <button>Clients</button>
                <button>Contact</button>
            </div>
        )
    }
}