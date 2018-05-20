import React, { Component } from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle';
import { DayDetails } from "./components/DayDetails/DayDetails";
import "./App.css";

class App extends Component {
  
  openDayDetails = (day) => {
    document.getElementById("day-details").style.width = "350px";
  }

  render() {
    return (
      <div className="main-wrapper">
        <div className="title">
          <h1>Time Planner</h1>
          <p>Organiza tus tareas</p>
        </div>
        <Calendar onChange={this.openDayDetails}/>
        <DayDetails />
      </div>
    )
  }
}

export default App;
