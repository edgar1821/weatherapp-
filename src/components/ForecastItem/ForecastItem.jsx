import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';


const ForecastItem = ({ weekday, hour ,data}) => (
    <div>
        <h2>{weekday}- {hour} hs</h2>
        <WeatherData data={data}/>
    </div>

)
ForecastItem.propTypes = {
    weekday: PropTypes.string.isRequired,
}
export default ForecastItem;