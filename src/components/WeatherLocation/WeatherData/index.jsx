import React from 'react';

import WheatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';


//css
import './styles.css';
const WheatherData = ({ data }) => {
    const { temperature, weatherState, humidity, wind } = data;
    return (
        <div className="weatherDataCont">
            <WeatherTemperature
                temperature={temperature}
                weatherState={weatherState}
            />
            <WheatherExtraInfo humidity={humidity} wind={wind} />
        </div>
    )
}

export default WheatherData;