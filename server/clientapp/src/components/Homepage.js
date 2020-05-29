//This file will house all the markup that will make up our homepage = (/) root.
//boilerplate for a functional component
import React from 'react';
const Homepage = () => { //component called Homepage
    return ( //return JSX
        <div style={{ textAlign: 'center', color: 'green' }}>
            <h3>
                ClearFeedback
            </h3>
            <p>
                ClearFeedback is an application that allows you to collect feedbacks from your own users.
            </p>
            <p>
                Improve your product's service using ClearFeedback.
            </p>
        </div>
    );
};

export default Homepage;