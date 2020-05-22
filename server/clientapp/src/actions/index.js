import axios from 'axios'; //use axios library to make Ajax request
import { FETCH_USER } from './actionTypes';

export const fetchSinginInfo = () => {// define action creator
    return function (dispatch) {
        axios.get('/api/currentUser') //GET request to our backend, parameter is a route to API
            .then(response => dispatch({ type: FETCH_USER, payload: response.data }));//After the request has been resolved and get a response back, dispatch the action containing that response.
    };
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
