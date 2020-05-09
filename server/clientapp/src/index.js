//This will render the root component to the DOM.
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers';

import App from './components/App'

const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.querySelector('#root'));//first parameter= our root component, second parametr=where we are attempting to render that component to = a reference to an existing Dom node inside of our html document.

//<App /> is component instance created by JSX tag