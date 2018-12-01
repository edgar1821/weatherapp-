import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WheatherData from './WeatherData/index';
import { SUN} from './../../constants/Weather';

import transformWeather from './../../services/transformWeather'
import {api_weather} from './../../constants/api_url';

import './style.css';
const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: "10 m/s"
}

class WeatherLocation extends Component {

    constructor() {
        super();
        //solo se puede usar el state en el constructor
        this.state = {
            city: "Buenos Aires",
            data: data,
        }
        console.log("constructor");
    }

    componentDidMount() {
        // se usa para hacer peticiones al servidor, se ejecuta despues del render y vuelve a ejecutar el render
        console.log("componentDidMount");
        this.handleUpdateClick();
    }
    componentDidUpdate(prevProps, prevState) {
        //se ejecuta despues del render
        console.log("componentDidUpdate");
        
    }
    
    handleUpdateClick = () => {

        fetch(api_weather)
            .then((resolve) => {
                return resolve.json();
            })
            .then((data) => {
                var newWeather = transformWeather(data);
                debugger;
                this.setState({
                    data: newWeather
                })
            })
            .catch((ex) => {
                console.log(ex);
                return ex.json();
            });


    }
    render() {
        //const {city,data} = this.state;   opcional
        console.log("render")
        const {city, data} = this.state;
        return (
            <div>
                <div className="weatherLocationCont">
                    <Location city={city}></Location>
                    {
                        data?
                        <WheatherData data={data}></WheatherData>:
                        
                        <CircularProgress />
                    }
                    
                    
                </div>

            </div>
        );
    }
}

export default WeatherLocation;