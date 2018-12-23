import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem/ForecastItem';
import transformForecast from './../services/TransformForecast';

// const days = [
//     "Lunes", "Martes", "Miercoles", "Jueves", "Viernes"
// ]
// var data = {
//     temperature: 10,
//     humidity: 10,
//     weatherState: "normal",
//     wind: "normal"
// }

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
        //se ejecuta cuando el componente haya sido montado en el dom, sirve mejor para inicializar
        this.updateCity(this.props.city);
    }
    componentWillReceiveProps(nextProps){
        // se ejecuta cada vez que hay una actualizacion de las propiedades
        //se ejecuta siempre excepto la primera vez (cuando carga la pagina)
        if(nextProps.city !== this.props.city){
            this.setState({forecastData:null});
            this.updateCity(nextProps.city);
        }
    }
    
    updateCity = city =>{
        debugger
        let url_forecast = `${url}?q=${city}&appid=${api_key}`;
        
        fetch(url_forecast)
        .then(data =>data.json())
        .then((weather_data) =>{
            
            
            //console.log(weather_data);
            
            const forecastData = transformForecast(weather_data);
            //console.log(forecastData);
            
            this.setState({forecastData: forecastData})

        })
        
    }

    renderForecastItemDays(forecastData) {
        
        var forecastDays = forecastData.map((forecast) => {
            return (<ForecastItem 
                key={`${forecast.weekday}${forecast.hour}`}
                weekday={forecast.weekday} 
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