//Header.js is where displays other components on the screen.
//create a class-based component
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom' //libary that works for react router inside browser
import StripePayment from './StripePayment';
// import Button from 'react-bootstrap/Button';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';

//define a class-based component called 'Header', (not functional component.) 
class Header extends Component {

    whatToRender() {
        switch (this.props.auth) { //this.props.auth tells me if user is logged in or not.
            case null: //when it is still waiting for the response, (pending),
                return; //then display nothing to the screen.

            case false: //it means the user is logged out.
                return (
                    <li><a href="/auth/google">Sign in with Google</a></li>
                )

            default: //when case is true: it means the user is logged in.
                // return 'user is logged in';
                return [
                    <li key="1"><StripePayment /></li>,
                    <li key="3"
                        style={{ margin: '0 13px' }}> Credits: {this.props.auth.credits}
                    </li>,
                    <li key="2"><a href="/api/logout">Sign out</a></li>
                ];
        }
    }

    render() {
        console.log(this.props);
        return (
            <nav>
                <div className="nav-wrapper teal lighten-2">
                    <Link to={this.props.auth ? '/surveys' : '/'} className="brand-logo blue-text text-darken-4">ClearFeedback</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="sass.html" className="blue-text text-darken-4">Component</a></li>
                        <li><a href="badges.html" className="blue-text text-darken-4">Component</a></li>
                        <li><a href="collapsible.html"></a>{this.whatToRender()}</li>
                    </ul>
                </div>
            </nav>
        );
    }//we don't use <a>. for logo. Instead, we use Link tag from react-router-dom
    //this.props.auth ? '/surveys' : '/' this means if 'this.props.auth' is truthy, then it is '/surveys'. If 'this.props.auth' is falsey, then it is '/'.
}

function mapStateToProps({ auth }) {
    return { auth }
}

export default connect(mapStateToProps)(Header);
//App.js file needs to import this Header component.