import React, { Component } from 'react';
import Location from './Location';
import WheatherData from './WeatherData/index';

import { SUN } from './../../constants/Weather';
import './style.css';

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: "10 m/s"
}
class WeatherLocation extends Component {

    render() {
        return (
            <div>
                <div className="weatherLocationCont">
                    <Location city={"Lima"}></Location>
                    <WheatherData data={data}></WheatherData>
                </div>

            </div>
        );
    }
} 

export default WeatherLocation;