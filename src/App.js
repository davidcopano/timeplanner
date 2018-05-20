import React, { Component } from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <div className="title">
          <h1>Time Planner</h1>
          <p>Organiza tus tareas</p>
        </div>
        <Calendar/>
      </div>
    )
  }
}

export default App;
