import axios from 'axios'; //use axios library to make Ajax request
import { FETCH_USER, FETCH_SURVEYS } from './actionTypes';

export const fetchSinginInfo = () => {// define asynchronous action creator
    return function (dispatch) {
        axios.get('/api/currentUser') //GET request to our backend, parameter is a route to API
            .then(response => dispatch({ type: FETCH_USER, payload: response.data }));//After the request has been resolved and get a response back, dispatch the action containing that response.
    };
};

export const sendTokenToBackEnd = (token) => async dispatch => { //create a new asynchronous actoin creator
    const response = await axios.post('/api/stripe', token); //make a POST request to our back-end server. first parameter is route handler. second parameter is the token we got from Stripe.

    dispatch({ type: FETCH_USER, payload: response.data });
};

export const submitSurvey = (values, history) => async dispatch => {
    const res = await axios.post('/api/surveys', values);

    history.push('/surveys');
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
    const res = await axios.get('/api/surveys');

    dispatch({ type: FETCH_SURVEYS, payload: res.data });
};


/* we want to dispacth an action only after this API request has been successfully completed.
So, axios.get('/api/currentUser') should be an asynchronous code.
So, only after the promise is resolved, it will dispatch an action and send that action to all the reducers.
{ type: FETCH_USER, payload: res } is an action that I dispatch.

whenever the action creater 'fetchSigninInfo' is called, it will return a function,
and reduxThunk will automatically call with the dispatch parameter.

now I will add that action creator to one of our components.
Where do we call this action creator= At App.js (App component) because not only header, other components will also need
the info of whether the user is logged in or not.
*/
