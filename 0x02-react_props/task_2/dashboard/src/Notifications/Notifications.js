import React from 'react'
import './Notifications.css'
import Close from '../assets/close.png'
import { getLatestNotification } from '../utils/utils'
import NotificationItem from './NotificationItem'

function btnClicked() {
    console.log("Close button has been clicked");
}

const Notif = () => {
    return <div className='Notifications'>
        <p>Here is the list of notifications</p>
        <button aria-label='Close' onClick={btnClicked} style={{ position: 'absolute', right: '15px', top: '5px', background: 'none', border: 'none' }}>
            <img src={Close} width={'30px'} alt='close button' />
        </button>
        <ul>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem html={getLatestNotification()} />
        </ul>
    </div >
}

export default Notif;