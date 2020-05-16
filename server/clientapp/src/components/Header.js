//create a class-based component
import React, { Component } from 'react';
// import Button from 'react-bootstrap/Button';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';

//define a class-based component called 'Header', (not functional component.) 
class Header extends Component {
    render() {
        return (
            <nav>
                <div class="nav-wrapper teal lighten-2">
                    <a href="#" class="brand-logo blue-text text-darken-4">ClearFeedback</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="sass.html" class="blue-text text-darken-4">Component</a></li>
                        <li><a href="badges.html" class="blue-text text-darken-4">Component</a></li>
                        <li><a href="collapsible.html">Sign in with Google</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Header;
//App.js file needs to import this Header component.