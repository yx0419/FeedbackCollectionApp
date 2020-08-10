import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys//SurveyList';

const Dashboarad = () => { //functional component
    return (
        <div>
            Dashboard
            <SurveyList />
            <div className="fixed-action-btn">
                <h5>Create Survey</h5>
                <Link to="/surveys/new" className="btn-floating btn-large green">
                    <i className="material-icons">create</i>
                </Link>
            </div>
        </div>
    );
};

export default Dashboarad;