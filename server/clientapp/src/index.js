//This will render the root component to the DOM.
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'materialize-css/dist/css/materialize.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

import App from './components/App'
import axios from 'axios';
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.querySelector('#root'));//first parameter= our root component, second parametr=where we are attempting to render that component to = a reference to an existing Dom node inside of our html document.

console.log('Stipe key is ', process.env.REACT_APP_STRIPE_KEY)
console.log('Environment is ', process.env.NODE_ENV)

//<App /> is component instance created by JSX tag