import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EventCalendar from './containers/eventCalendar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">
        <span className="glyphicon glyphicon-calendar" style={{marginRight: '10px'}}></span>
         Event Calendar </h1>
        </header>
        <EventCalendar />
        <hr />
      </div>
    );
  }
}

export default App;
