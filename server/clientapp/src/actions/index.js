import axios from 'axios'; //use axios library to make Ajax request
import { FETCH_USER } from './actionType';

const fetchSinginInfo = () => {// define action creator
    return function () {
        axios.get('/api/currentUser') //GET request to our backend, parameter is a route to API
    }
};