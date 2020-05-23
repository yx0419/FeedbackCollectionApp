//create a class-based component
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Button from 'react-bootstrap/Button';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';

//define a class-based component called 'Header', (not functional component.) 
class Header extends Component {

    whatToRender() {
        switch (this.props.auth) {
            case null: //when it is still wating for the response, (pending),
                return; //then display nothing to the screen.

            case false: //it means the user is logged out.
                return (
                    <li><a href="auth/google">Sign in with Google</a></li>
                )

            default: //when case is true: it means the user is logged in.
                // return 'user is logged in';
                return <li><a>Sign out</a></li>
        }
    }

    render() {
        console.log(this.props);
        return (
            <nav>
                <div className="nav-wrapper teal lighten-2">
                    <a href="#" className="brand-logo blue-text text-darken-4">ClearFeedback</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="sass.html" className="blue-text text-darken-4">Component</a></li>
                        <li><a href="badges.html" className="blue-text text-darken-4">Component</a></li>
                        <li><a href="collapsible.html"></a>{this.whatToRender()}</li>
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth }
}

export default connect(mapStateToProps)(Header);
//App.js file needs to import this Header component.