import React from 'react';
import './Notifications.css'
import Close from './close.png'
import { getLatestNotification } from './utils';

function btnClicked() {
    console.log("Close button has been clicked")
}

const Notif = () => {
    return <div className='Notifications'>
        <p>Here is the list of notifications</p>
        <button aria-label='Close' onClick={btnClicked} style={{ position: 'absolute', right: '15px', top: '5px', background: 'none', border: 'none' }}>
            <img src={Close} width={'30px'} alt='close button' />
        </button>
        <ul>
            <li data="default">New course available</li>
            <li data="urgent">New resume available</li>
            <li data="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
        </ul>
    </div >
}

export default Notif;