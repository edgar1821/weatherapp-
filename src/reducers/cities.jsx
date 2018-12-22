import {SET_FORECAST_DATA} from './../actions';

export const cities = (state = {}, actions) => {
    switch (actions.type) {
        case SET_FORECAST_DATA:
            return actions.payload

        default:
            return state;

    }
}