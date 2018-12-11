import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem/ForecastItem';

const days = [
    "Lunes", "Martes", "Miercoles", "Jueves", "Viernes"
]
var data = {
    temperature: 10,
    humidity: 10,
    weatherState: "normal",
    wind: "normal"
}
class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = {
            forecastData: null
        }
    }
    renderForecastItemDays() {
        // var forecastDays = days.map((dia) => {
        //     return (<ForecastItem weekday={dia} hour={10} data={data}></ForecastItem>);
        // })
        // return forecastDays;
        return "Render Item";
    }
    renderProgress = () => {
        return <h3>Cargando pronostico extendido</h3> ;
    }
    render() {
        let { city } = this.props;
        let { forecastData } = this.state;
        return (
            <div>
                <h2 className="forecast-title">
                    Pronostico extendido {city}
                </h2>
                {forecastData ?
                    this.renderForecastItemDays() :
                    this.renderProgress()
                }

            </div>
        );
    }
}
ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;