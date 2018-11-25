import React from 'react';


import Location from './Location';
import WheatherData from './WeatherData'
const WeatherLocation = () => (
    <div>
        WeatherLocation
        <Location city={"Lima"}></Location>
        <WheatherData></WheatherData>
    </div>
)

export default WeatherLocation;