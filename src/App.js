import React, { Component } from 'react';
import './App.css';

//componentes
//import WeatherLocation from './components/WeatherLocation';
import LocationList from './components/LocationList';

const cities =[
  "Buenos Aires,ar",
  "Bogota,col",
  "Barcelona,es",
  "Lima,pe"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        
        {/* <WeatherLocation city="Buenos Aires,ar"></WeatherLocation> */}
        <LocationList cities ={cities}></LocationList>
      </div>

    );
  }
}

export default App;
