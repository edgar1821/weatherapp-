import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem/ForecastItem';
import transformForecast from './../services/TransformForecast';

const days = [
    "Lunes", "Martes", "Miercoles", "Jueves", "Viernes"
]
var data = {
    temperature: 10,
    humidity: 10,
    weatherState: "normal",
    wind: "normal"
}

const api_key ="32d9de6a1a3b0a27ec0f27544d9dd615";
const url = "https://api.openweathermap.org/data/2.5/forecast";
class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = {
            forecastData: null
        }
    }

    componentDidMount() {
        let url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;
        
        fetch(url_forecast)
        .then(data =>data.json())
        .then((weather_data) =>{
            
            
            console.log(weather_data);
            const forecastData = transformForecast(weather_data);
            console.log(forecastData);
            debugger
            this.setState({forecastData: forecastData})

        })
        .catch((error)=>{
            debugger
            console.log(error);
        })
    }
    
    renderForecastItemDays(forecastData) {
        var forecastDays = forecastData.map((forecast) => {
            return (<ForecastItem 
                key={`${forecast.weekday}${forecast.hour}`}
                weekday={forecast.dia} 
                hour={forecast.hour} 
                data={forecast.data}></ForecastItem>);
        })
        return forecastDays;
        
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
                    this.renderForecastItemDays(forecastData) :
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