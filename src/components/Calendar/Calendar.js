import React, { Component } from 'react';
import './Calendar.css';

export class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monthDays: this.getMonthDays(new Date().getFullYear(), new Date().getMonth())
        }
    }

    getMonthDays = (year, month) => {
        let date = new Date(year, month, 1);
        let days = [];
        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        return days;
    }

    render() {
        return (
            <div className="calendar">
                {this.state.monthDays.map((day) => (
                    <div className="day" key={day.getDate()}>
                        <h1>{day.getDate()}</h1>
                    </div>
                ))}
            </div>
        )
    }
}