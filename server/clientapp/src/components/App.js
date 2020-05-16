import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'//BrowserRouter, Route are React components and we can return these in any component we create.

import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>//dummy component called 'Dashboard'.
const CreateSurvey = () => <h2>createSurvey</h2>
const Homepage = () => <h2>homepage</h2>

//whenever user goes to root route, show Homepage component.
const App = () => { // create App component (functional component) that returns JSX
    return (
        <div className="container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact={true} path="/" component={Homepage} />
                    <Route exact={true} path="/surveys" component={Dashboard} />
                    <Route path="/surveys/new" component={CreateSurvey} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App; //export the component