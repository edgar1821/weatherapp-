import React, { Component } from 'react';
import './App.css';

//componentes
//import WeatherLocation from './components/WeatherLocation';
import LocationList from './components/LocationList';



class App extends Component {
  render() {
    return (
      <div className="App">
        
        {/* <WeatherLocation city="Buenos Aires,ar"></WeatherLocation> */}
        <LocationList></LocationList>
      </div>

    );
  }
}

export default App;
