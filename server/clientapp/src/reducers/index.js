import { combineReducers } from 'redux';
import logReducer from './logReducer';
import { reducer as reduxForm } from 'redux-form';
import surveysReducer from './surveysReducer';

export default combineReducers({
    auth: logReducer,
    form: reduxForm,
    surveys: surveysReducer
});