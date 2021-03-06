import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'//BrowserRouter, Route are React components and we can return these in any component we create.
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Homepage from './Homepage';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

//whenever user goes to root route, show Homepage component.
class App extends Component { // create class-based App component 
    componentDidMount() { //only after this component instance has been rendered onto the screen, this function will be called.
        this.props.fetchSinginInfo();
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact={true} path="/" component={Homepage} />
                        <Route exact={true} path="/surveys" component={Dashboard} />
                        <Route path="/surveys/new" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App); //export the component