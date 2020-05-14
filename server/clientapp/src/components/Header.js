//create a class-based component
import React, { Component } from 'react';

//define a class-based component called 'Header', (not functional component.) 
class Header extends Component {
    render() {
        return (
            <div>
                Header,,,
            </div>
        );
    }
}
export default Header;
//App.js file needs to import this Header component.