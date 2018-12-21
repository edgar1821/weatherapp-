import getUrlWeatherByCity from './../services/getUrlWeatherByCity';
import transformWeather from './../services/transformWeather'

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({ type: SET_CITY, payload }); //metodo para crear acciones
export const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });

export const setSelectedCity = payload => {
    return dispatch => {
        
        const url = getUrlWeatherByCity(payload);

        dispatch(setCity(payload));

        return fetch(url)
            .then((resolve) => {
                return resolve.json();
            })
            .then((data) => {
                debugger
                var forecastData = transformWeather(data);
                dispatch(setForecastData({ city: payload, forecastData }))


            })
            .catch((ex) => {

                console.log(ex);
                return ex.json();
            });
    }
}