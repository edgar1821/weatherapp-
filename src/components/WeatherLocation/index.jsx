import React, { Component } from 'react';

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
    }



    handleUpdateClick = () => {

        fetch(api_weather)
            .then((resolve) => {
                return resolve.json();
            })
            .then((data) => {
                var newWeather = transformWeather(data);
                this.setState({
                    data: newWeather
                })
            })
            .catch((ex) => {

                debugger;
                console.log(ex);
                return ex.json();
            });


    }
    render() {
        //const {city,data} = this.state;   opcional
        return (
            <div>
                <div className="weatherLocationCont">
                    <Location city={this.state.city}></Location>
                    <WheatherData data={this.state.data}></WheatherData>
                    <button onClick={this.handleUpdateClick}>Actualizar</button>
                </div>

            </div>
        );
    }
}

export default WeatherLocation;