import transformForecast from './../services/TransformForecast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({ type: SET_CITY, payload }); //metodo para crear acciones
export const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });


const api_key = "32d9de6a1a3b0a27ec0f27544d9dd615";
const url = "https://api.openweathermap.org/data/2.5/forecast";

export const setSelectedCity = payload => {
    return dispatch => {

        let url_forecast = `${url}?q=${payload}&appid=${api_key}`;

        debugger
        dispatch(setCity(payload));
        return fetch(url_forecast)
            .then(data => data.json())
            .then((weather_data) => {


                //console.log(weather_data);
                debugger
                const forecastData = transformForecast(weather_data);
                //console.log(forecastData);
                dispatch(setForecastData({city: payload, forecastData}));

                //modificar el estado del resultado con la promisse (fetch)
            })
            
    }
}