import React from 'react';
import blog from '../../assets/BlogPost.png';
import contact from '../../assets/contact.png';
import eyeOff from '../../assets/eye-off.png';
import './logIn.css';

const logIn = props => (
    <body>
        <div className="conatiner">
            <input id="email" type="email" placeholder="Enter your username" />
            <input id="pass" type="password" placeholder="Enter your password" />

        </div>
    </body>
)

export default logIn