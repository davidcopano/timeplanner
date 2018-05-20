import React, { Component } from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle';
import { DayDetails } from "./components/DayDetails/DayDetails";
import "./App.css";

class App extends Component {

  constructor() {
    super();
    this.state = {
      dayOpened: undefined
    }
  }

  openDayDetails = (day) => {
    this.setState({
      dayOpened: day
    })
  }

  render() {
    return (
      <div className="main-wrapper">
        <div className="title">
          <h1>Time Planner</h1>
          <p>Organiza tus tareas</p>
        </div>
        <Calendar onChange={this.openDayDetails}/>
        {this.state.dayOpened ? <DayDetails day={this.state.dayOpened} /> : null}
      </div>
    )
  }
}

export default App;
