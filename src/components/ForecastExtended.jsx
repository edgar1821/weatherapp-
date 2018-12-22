import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem/ForecastItem';


// const days = [
//     "Lunes", "Martes", "Miercoles", "Jueves", "Viernes"
// ]
// var data = {
//     temperature: 10,
//     humidity: 10,
//     weatherState: "normal",
//     wind: "normal"
// }


const renderForecastItemDays = (forecastData) => {

    var forecastDays = forecastData.map((forecast) => {
        return (<ForecastItem
            key={`${forecast.weekday}${forecast.hour}`}
            weekday={forecast.weekday}
            hour={forecast.hour}
            data={forecast.data}></ForecastItem>);
    })
    return forecastDays;

}
const renderProgress = () => {
    return <h3>Cargando pronostico extendido</h3>;
}
const ForecastExtended = ({ city, forecastData }) => (

    <div>
        <h2 className="forecast-title">
            Pronostico extendido {city}
        </h2>
        {forecastData ?
            renderForecastItemDays(forecastData) :
            renderProgress()
        }

    </div>
)



ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}

export default ForecastExtended;