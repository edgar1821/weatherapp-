import React from 'react';
import Location from './Location';
import WheatherData from './WeatherData/index';

import './style.css';

const WeatherLocation = () => (
    <div>
        <div className="weatherLocationCont">
            <Location city={"Lima"}></Location>
            <WheatherData></WheatherData>
        </div>

    </div>
)


export default WeatherLocation;