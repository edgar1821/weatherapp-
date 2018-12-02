import React, { Component } from 'react';
import './App.css';

//componentes
import WeatherLocation from './components/WeatherLocation';



class App extends Component {
  render() {
    return (
      <div className="App">
        
        <WeatherLocation city="Buenos Aires,ar"></WeatherLocation>
      </div>

    );
  }
}

export default App;
