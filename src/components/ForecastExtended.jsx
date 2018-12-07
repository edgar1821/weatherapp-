import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem/ForecastItem';

const days = [
    "Lunes", "Martes", "Miercoles", "Jueves", "Viernes"
]
var data={
    temperature:10,
    humidity: 10,
    weatherState: "normal",
    wind: "normal"
}
class ForecastExtended extends Component {

    renderForecastItemDays() {
        var forecastDays = days.map((dia) => {
            return (<ForecastItem weekday={dia} hour={10} data={data}></ForecastItem>);
        })
        return forecastDays;
    }
    render() {
        let { city } = this.props;
        return (
            <div>
                <h2 className="forecast-title">
                    Pronostico extendido {city}
                </h2>
                {this.renderForecastItemDays()}
                
            </div>
        );
    }
}
ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;