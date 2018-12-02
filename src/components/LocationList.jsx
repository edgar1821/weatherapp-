import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => {
    return (
        <div>
            <WeatherLocation city="Buenos Aires,ar"></WeatherLocation>
            <WeatherLocation city="Bogota,col"></WeatherLocation>
            <WeatherLocation city="Mexico,mex"></WeatherLocation>
            <WeatherLocation city="Lima,pe"></WeatherLocation>
        </div>
    )

}

export default LocationList;