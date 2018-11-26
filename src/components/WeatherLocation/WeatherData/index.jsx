import React from 'react';

import WheatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

import { CLOUDY} from './../../../constants/Weather';
//css
import './styles.css';
const WheatherData = () => (
    <div className="weatherDataCont">
        <WeatherTemperature
            temperature={20}
            weatherState={CLOUDY}
        />
        <WheatherExtraInfo humidity={80} wind={"10 m/s"} />
    </div>
)

export default WheatherData;