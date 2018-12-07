import React, { Component } from 'react';
//import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
//import Typography from '@material-ui/core/Typography';
//import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import ForecastExtended from './components/ForecastExtended';
import './App.css';

//componentes
//import WeatherLocation from './components/WeatherLocation';
import LocationList from './components/LocationList';
import { MuiThemeProvider } from '@material-ui/core';

const cities = [
  "Buenos Aires,ar",
  "Bogota,col",
  "Barcelona,es",
  "Lima,pe"
]

class App extends Component {
  constructor(){
    super();
    this.state = {
      city: null
    }
  }
  printForeCast = city =>{
    this.setState({
      city
    });
    
  }
  render() {
    const {city} = this.state;
    return (
      <div className="App">
      <MuiThemeProvider>
        <Grid>
            <Row>
              <AppBar title="Weather App" />
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <LocationList 
                  cities={cities}
                  onWeatherLocationClick={this.printForeCast}
                  ></LocationList>
              </Col>
              <Col xs={12} md={6}>
                <div className="details">
                {
                  city&& <ForecastExtended city={city}/>
                }
                  
                </div>
              </Col>
            </Row>
          </Grid>
      </MuiThemeProvider>
        

      </div>

    );
  }
}

export default App;
