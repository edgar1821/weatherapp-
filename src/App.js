import React, { Component } from 'react';
//import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import './App.css';

//componentes
//import WeatherLocation from './components/WeatherLocation';
import LocationList from './components/LocationList';

const cities = [
  "Buenos Aires,ar",
  "Bogota,col",
  "Barcelona,es",
  "Lima,pe"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Row>
            <AppBar position="stycky">
              <Toolbar>
                <Typography variant="title" color="inherit" >
                  Weather App
                </Typography>
              </Toolbar>
            </AppBar>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList cities={cities}></LocationList>
            </Col>
            <Col xs={12} md={6}>
              <div className="details">

              </div>
            </Col>
          </Row>
          
        </Grid>


      </div>

    );
  }
}

export default App;
