import React, { Component } from 'react';
import './App.css';

//componentes
import WeatherLocation from './components/WeatherLocation';

class App extends Component {
  render() {
    return (
      <div className="App">
        weather app (aplicacion del clima)
        <WeatherLocation></WeatherLocation>
      </div>

    );
  }
}

export default App;
