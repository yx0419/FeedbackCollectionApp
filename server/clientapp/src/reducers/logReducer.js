//here create a reducer and export it.

import { FETCH_USER } from '../actions/actionTypes';

export default function (state = null, action) {

    //console.log(action);

    // if (state === undefined) {
    //     return null;
    // }

    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;//if it is empty string '' or false, return false, not ''. 
        default:
            return state; //nothing changed.
    }
}