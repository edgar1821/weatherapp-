import React from 'react';
import WeatherIcons from 'react-weathericons';

import {CLOUD, CLOUDY, SUN,RAIN,SNOW,WINDY,FOG} from './../constants/Weather';

const icons = {
    [CLOUD]:"cloud",
    [CLOUDY]:"cloudy",
    [SUN]:"day-sunny",
    [RAIN]:"rain",
    [SNOW]:"snow",
    [WINDY]:"sindy",
    [FOG]:"day-fog"
}

const getWeatherIcon = (weatherState) => {
    
    let icon = icons[weatherState];

    if (icon)
        return <WeatherIcons name={icon} size="2x" />;
    else
        return <WeatherIcons name="day-sunny" size="2x" />

}
const WheatherTemperature = ({ temperature, weatherState }) => (
    <div>
        {
            getWeatherIcon(weatherState)
        }
        <span>{`${temperature} C°`}</span>
    </div>
);

export default WheatherTemperature;