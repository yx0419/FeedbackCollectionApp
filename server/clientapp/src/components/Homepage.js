//This file will house all the markup that will make up our homepage = (/) root.
//boilerplate for a functional component
import React from 'react';
import Image from 'react-image-resizer';
import img from '/Users/yunjae/MyProjectsToPutOnGithub/FeedbackCollection/server/clientapp/src/img.jpg'
import { findLastIndex } from 'lodash';
const Homepage = () => { //component called Homepage
    return ( //return JSX
        <div style={{ textAlign: 'center', color: 'green', padding: '50px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'center', color: 'green' }}>


                <h5>
                    Get feedback from your customers using ClearFeedback
            </h5>
            </div>
            <h6>
                ClearFeedback is an application that allows start-up companies to get simple feedbacks using survey sent via email
            </h6>

            <p> 10 credits ($1) required to send 10 emails. minimum 10 credits required to use the service. </p>

            <Image
                img src={img} alt="img" class="center"
                height={150}
                width={1000}
            />
        </div>
    );
};

export default Homepage;