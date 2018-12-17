import { createStore } from 'redux';
import {city} from './../reducers/city';

const initialState = {
    city:'Buenos Aires,ar'
}; //estado inicial de la aplicacion


export const store = createStore(city,initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());//se agrega esta inea para que funcione el plugin de redux en chrome


//el estado de la aplicacion es manjado por el store y los reducers 