import React, { Component } from 'react';
import "./DayDetails.css";
import { Details } from "../../utilities/DayDetails";

export class DayDetails extends Component {

    constructor(props) {
        super(props);
        this.details = new Details(this.props.day)
        this.state = {
            day: this.props.day,
            details: this.details.getDayDetails(),
            newDetail: {
                project: '',
                time: '',
                description: ''
            }
        }
        console.log('mis details = ');
        console.log(this.state.details);
    }

    closeDayDetails = () => {
        this.setState({
            day: undefined
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            day: nextProps.day,
            details: this.details.getDayDetails(nextProps.day)
        })
        console.log('componentWillReceiveProps()');
        console.log(this.state.details);
    }

    formatDate = (date) => {
        return date.toLocaleString('es-ES', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    handleProject = (event) => {
        let oldState = this.state;
        oldState.newDetail.project = event.target.value;
        this.setState({
            newDetail: oldState.newDetail
        });
    }

    handleTime = (event) => {
        let oldState = this.state;
        oldState.newDetail.time = event.target.value;
        this.setState({
            newDetail: oldState.newDetail
        });
    }

    handleDescription = (event) => {
        let oldState = this.state;
        oldState.newDetail.description = event.target.value;
        this.setState({
            newDetail: oldState.newDetail
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        let oldState = this.state;
        oldState.details.push(this.state.newDetail);
        this.details.addDayDetails(this.state.newDetail);
        this.setState({
            newDetail: {
                project: '',
                time: '',
                description: ''
            },
            details: oldState.details
        });
    }

    render() {
        // si tenemos dia mostramos los detalles
        // si no animamos el elemento para que se cierre
        if (this.state.day) {
            return (
                <div id="day-details" className={['day-details', this.state.day !== undefined ? 'isOpened' : 'isClosed'].join(' ')} >
                    <button className="closebtn" onClick={this.closeDayDetails}>&times;</button>
                    <p className="title">{this.formatDate(this.state.day)}</p>
                    <div className="add-details-container">
                        <h1>Añadir detalles</h1>
                        <form onSubmit={this.onSubmit}>
                            <div className="field">
                                <label htmlFor="project">Proyecto</label>
                                <input type="text" id="project" name="project" value={this.state.newDetail.project} onChange={this.handleProject} placeholder="Ejemplo: BIDOQ, Gesco, NPlus..." />
                            </div>
                            <div className="field">
                                <label htmlFor="time">Tiempo invertido</label>
                                <input type="text" id="time" name="time" placeholder="Ejemplo: 1h, 45m, 1h 30m..." value={this.state.newDetail.time} onChange={this.handleTime} />
                            </div>
                            <div className="field">
                                <label htmlFor="description">Descripción</label>
                                <textarea placeholder="Arreglado error..." value={this.state.newDetail.description} onChange={this.handleDescription}></textarea>
                            </div>
                            <button type="submit">Añadir</button>
                        </form>
                    </div>
                    <div className="details-list" style={{ textAlign: 'center', marginTop: '10px' }}>
                        {JSON.stringify(this.state.details)}
                    </div>
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