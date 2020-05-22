import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'//BrowserRouter, Route are React components and we can return these in any component we create.
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>//dummy component called 'Dashboard'.
const CreateSurvey = () => <h2>createSurvey</h2>
const Homepage = () => <h2>homepage</h2>

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
                        <Route path="/surveys/new" component={CreateSurvey} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App); //export the component