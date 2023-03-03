import React from 'react';
import bell from '../../../images/bell.svg'

function Notification(props) {
    return ( 
        <>
            <img src={bell} alt="bell" className='bell'/>
        </>
     );
}

export default Notification;