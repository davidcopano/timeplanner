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

    formatDate = (date) => {
        return date.toLocaleString('es-ES', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    render() {
        // si tenemos dia mostramos los detalles
        // si no animamos el elemento para que se cierre
        if (this.state.day) {
            return (
                <div id="day-details" className={['day-details', this.state.day !== undefined ? 'isOpened' : 'isClosed'].join(' ')} >
                    <button className="closebtn" onClick={this.closeDayDetails}>&times;</button>
                    <p className="title">{this.formatDate(this.state.day)}</p>
                </div>
            )
        }
        else {
            return (
                <div id="day-details" className={['day-details', 'isClosed'].join(' ')} >
                    <button className="closebtn" onClick={this.closeDayDetails}>&times;</button>
                </div>
            )
        }
    }
}