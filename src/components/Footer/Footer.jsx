import React from 'react';
import Notification from './Notification/Notification';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Add from './Add/Add';
import Search from './Search/Search';

function Footer(props) {
    return ( 
        <div className='footer'>
            <div><Home /></div>
            <div><Profile /></div>
            <div><Add /></div>
            <div><Notification/></div>
            <div><Search /></div>
        </div>
     );
}

export default Footer;