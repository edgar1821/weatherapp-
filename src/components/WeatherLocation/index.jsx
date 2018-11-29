import React, { Component } from 'react';
import Location from './Location';
import WheatherData from './WeatherData/index';

import { SUN,WINDY } from './../../constants/Weather';
import './style.css';

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: "10 m/s"
}

const data2 = {
    temperature: 15,
    weatherState: WINDY,
    humidity: 100,
    wind: "140 m/s"
}

class WeatherLocation extends Component {

    constructor(){
        super();
        this.state={
            city:"Buenos Aires",
            data: data,
        }
    }
    handleUpdateClick = ()=>{
        //console.log("actualizado");
        //alert("actualizado");
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