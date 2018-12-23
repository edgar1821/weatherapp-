import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { city } from './../reducers/city';

const initialState = {
    city: 'Buenos Aires,ar'
}; //estado inicial de la aplicacion


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
export const store = createStore(city, initialState, composeEnhancer(applyMiddleware(thunk)));
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());//se agrega esta inea para que funcione el plugin de redux en chrome


//el estado de la aplicacion es manjado por el store y los reducers 