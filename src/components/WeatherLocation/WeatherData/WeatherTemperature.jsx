import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
    FOG,
    THUNDER,
    DRIZZLE
} from './../../../constants/Weather';

import './styles.css';
const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "sindy",
    [FOG]: "day-fog",
    [THUNDER]:"day-thunderstore",
    [DRIZZLE]:"day-showers,"
}

const getWeatherIcon = (weatherState) => {

    let icon = icons[weatherState];

    let sizeIcon = "4x";
    if (icon)
        return <WeatherIcons name={icon} size={sizeIcon} />;
    else
        return <WeatherIcons name="day-sunny" size={sizeIcon} />

}
const WheatherTemperature = ({ temperature, weatherState }) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{` C°`}</span>
    </div>
);

WheatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WheatherTemperature;