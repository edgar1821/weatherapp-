import SET_FORECAST_DATA from './../actions';

export const cities = (state = {}, actions) => {
    switch (actions.type) {
        case SET_FORECAST_DATA:
            const { city, forecastData } = actions.payload;
            return {...state, [city]:{forecastData} }

        default:
            return state;

    }
}