import React from 'react'
import Information from './information';
import Registration from './registration';
import Schedule from './schedule';
import './main.css'
import ModalWithCheckboxes from '../../components/ModalWithCheckboxes';

function Main() {
    return ( 
        <div className='main'>
            <Registration />
            <Schedule />
            <Information />
            <ModalWithCheckboxes />
        </div>
     );
}

export default Main;