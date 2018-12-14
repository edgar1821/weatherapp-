import { createStore } from 'redux';
export const store = createStore(() => { },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());//se agrega esta inea para que funcione el plugin de redux en chrome