import React from 'react'
import './Notifications.css'
import Close from '../assets/close.png'
import { getLatestNotification } from '../utils/utils'
import NotificationItem from './NotificationItem'
import propTypes from 'prop-types'

function btnClicked() {
    console.log("Close button has been clicked");
}

const Notif = ({ displayDrawer }) => {
    return <div className='notif-holder'>
        <div className='menuItem'>
            <p>Your notifications</p>
        </div>
        {displayDrawer ? (
            <div className='Notifications'>
                <p>Here is the list of notifications</p>
                <button aria-label='Close' onClick={btnClicked} style={{ position: 'absolute', right: '4px', top: '4px', background: 'none', border: 'none' }}>
                    <img src={Close} width={'30px'} alt='close button' />
                </button>
                <ul>
                    <NotificationItem type="default" value="New course available" />
                    <NotificationItem type="urgent" value="New resume available" />
                    <NotificationItem html={getLatestNotification()} />
                </ul>
            </div >
        ) : (
            null
        )
        }

    </div>
}

Notif.propTypes = {
    displayDrawer: propTypes.bool
}

Notif.defaultProps = {
    displayDrawer: true
}

export default Notif;