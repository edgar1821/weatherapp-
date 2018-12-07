import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';


const ForecastItem = ({ weekday, hour ,data}) => (
    <div>
        <div>{weekday} Hola: {hour}</div>
        <WeatherData data={data}/>
    </div>

)
ForecastItem.propTypes = {
    weekday: PropTypes.string.isRequired,
}
export default ForecastItem;