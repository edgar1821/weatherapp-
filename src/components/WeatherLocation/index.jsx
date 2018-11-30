import React, { Component } from 'react';
import Location from './Location';
import WheatherData from './WeatherData/index';

import { SUN,SNOW } from './../../constants/Weather';
import './style.css';
const location ="Buenos Aires,ar";
//const api_key="f99bbd9e4959b51e9bd0d7f7356b38d";
const api_key="32d9de6a1a3b0a27ec0f27544d9dd615"; //mi api key
const url_base_weather ="https://api.openweathermap.org/data/2.5/weather";

const api_weather =`${url_base_weather}?q=${location}&APPID=${api_key}`; 

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: "10 m/s"
}

const data2 = {
    temperature: 15,
    weatherState: SNOW,
    humidity: 100,
    wind: "140 m/s"
}

class WeatherLocation extends Component {

    constructor(){
        super();
        //solo se puede usar el state en el constructor
        this.state={
            city:"Buenos Aires",
            data: data,
        }
    }
    handleUpdateClick = ()=>{
        //console.log("actualizado");
        //alert("actualizado");
        //para cambiar los valores del state es con setState

        fetch(api_weather);
        this.setState({
            city:"Lima",
            data:data2,
        })
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