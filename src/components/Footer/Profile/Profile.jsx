import React from 'react';
import profile from '../../../images/profile.svg'

function Profile(props) {
    return ( 
        <>
        <img src={profile} alt="profile" className='profile' />
        </>
     );
}

export default Profile;