import React from 'react';
import PropTypes from 'prop-types';

import WheatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';


//css
import './styles.css';
const WheatherData = ({ data: { temperature, weatherState, humidity, wind } }) => {

    return (
        <div className="weatherDataCont" >
            <WeatherTemperature
                temperature={temperature}
                weatherState={weatherState}
            />
            <WheatherExtraInfo humidity={humidity} wind={wind} />
        </div>
    )
}

WheatherData.propTypes = {
    data:PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}
export default WheatherData;